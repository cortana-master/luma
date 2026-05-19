'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Loader2 } from 'lucide-react'
import { useAgentStore } from '../stores/agent.store'
import { cn } from '@/shared/presentation/utils/cn'

export function AgentChat() {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, isProcessing, addMessage, setProcessing } = useAgentStore()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isProcessing) return

    const userMessage = input.trim()
    setInput('')
    addMessage({ role: 'user', content: userMessage })
    setProcessing(true)

    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      })

      const data = await res.json()
      if (data.error) {
        addMessage({ role: 'agent', content: 'Error: ' + data.error })
      } else {
        addMessage({ role: 'agent', content: data.response })
      }
    } catch {
      addMessage({ role: 'agent', content: 'Error de conexión con el agente.' })
    }

    setProcessing(false)
  }

  return (
    <div className="flex flex-col h-[600px] rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2">
        <Bot className="h-5 w-5 text-violet-400" />
        <span className="font-medium">Agente Luma</span>
        <span className="ml-auto text-xs text-slate-500">Powered by Gemini</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 py-8">
            <Bot className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>¡Hola! Soy tu agente de aprendizaje.</p>
            <p className="text-sm mt-1">Pregúntame lo que quieras.</p>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={cn('flex gap-3', msg.role === 'user' ? 'flex-row-reverse' : 'flex-row')}>
            <div className={cn('w-8 h-8 rounded-full flex items-center justify-center shrink-0',
              msg.role === 'user' ? 'bg-violet-600' : 'bg-slate-800')}>
              {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-violet-400" />}
            </div>
            <div className={cn('max-w-[80%] rounded-2xl px-4 py-2 text-sm',
              msg.role === 'user' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-200')}>
              {msg.content}
            </div>
          </div>
        ))}

        {isProcessing && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
              <Bot className="h-4 w-4 text-violet-400" />
            </div>
            <div className="bg-slate-800 rounded-2xl px-4 py-2">
              <Loader2 className="h-4 w-4 animate-spin text-violet-400" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800 flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-violet-500 focus:outline-none text-sm" />
        <button type="submit" disabled={isProcessing || !input.trim()}
          className="px-4 py-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 rounded-lg transition">
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
