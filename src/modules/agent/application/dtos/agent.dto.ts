export interface SendMessageDTO {
  prompt: string
  context?: string
  conversationId?: string
}

export interface AgentResponseDTO {
  response: string
  conversationId: string
}

export interface StreamMessageDTO {
  prompt: string
  onChunk: (chunk: string) => void
}
