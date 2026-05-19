import { SendMessageDTO, AgentResponseDTO } from '../dtos/agent.dto'

export interface AgentService {
  sendMessage(dto: SendMessageDTO): Promise<AgentResponseDTO>
}
