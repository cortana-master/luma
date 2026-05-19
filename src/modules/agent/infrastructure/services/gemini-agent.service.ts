import { AgentService } from '../../application/services/agent.service'
import { SendMessageDTO, AgentResponseDTO } from '../../application/dtos/agent.dto'
import { GoogleGenAI } from '@google/genai'
import { env } from '@/shared/infrastructure/config/env'

export class GeminiAgentService implements AgentService {
  private genAI = new GoogleGenAI({ apiKey: env.google.apiKey })

  async sendMessage(dto: SendMessageDTO): Promise<AgentResponseDTO> {
    const prompt = dto.context
      ? `Contexto: ${dto.context}\n\nPregunta: ${dto.prompt}`
      : dto.prompt

    const response = await this.genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    })

    return {
      response: response.text || 'Sin respuesta',
      conversationId: dto.conversationId || crypto.randomUUID(),
    }
  }

  async streamMessage(dto: { prompt: string; onChunk: (chunk: string) => void }) {
    const response = await this.genAI.models.generateContentStream({
      model: 'gemini-2.0-flash',
      contents: dto.prompt,
    })

    for await (const chunk of response) {
      dto.onChunk(chunk.text || '')
    }
  }
}
