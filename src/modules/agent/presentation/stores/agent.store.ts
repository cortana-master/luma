import { create } from 'zustand'

interface Message {
  id: string
  role: 'user' | 'agent'
  content: string
  timestamp: Date
}

interface AgentState {
  messages: Message[]
  isProcessing: boolean
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  setProcessing: (processing: boolean) => void
  clearMessages: () => void
}

export const useAgentStore = create<AgentState>()((set) => ({
  messages: [],
  isProcessing: false,
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, { ...message, id: crypto.randomUUID(), timestamp: new Date() }],
    })),
  setProcessing: (processing) => set({ isProcessing: processing }),
  clearMessages: () => set({ messages: [] }),
}))
