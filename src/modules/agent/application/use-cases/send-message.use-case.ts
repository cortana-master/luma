import { AgentService } from '../services/agent.service'
import { SendMessageDTO, AgentResponseDTO } from '../dtos/agent.dto'

export class SendMessageUseCase {
  constructor(private readonly agentService: AgentService) {}

  async execute(dto: SendMessageDTO): Promise<AgentResponseDTO> {
    return this.agentService.sendMessage(dto)
  }
}
