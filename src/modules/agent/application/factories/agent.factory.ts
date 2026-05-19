import { GeminiAgentService } from '../../infrastructure/services/gemini-agent.service'
import { SendMessageUseCase } from '../use-cases/send-message.use-case'

export class AgentFactory {
  private static agentService = new GeminiAgentService()

  static getSendMessageUseCase(): SendMessageUseCase {
    return new SendMessageUseCase(this.agentService)
  }
}
