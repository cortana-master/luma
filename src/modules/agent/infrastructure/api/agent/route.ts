import { NextRequest, NextResponse } from 'next/server'
import { AgentFactory } from '../../../application/factories/agent.factory'
import { agentPromptSchema } from '@/shared/infrastructure/validation/schemas'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prompt, context } = agentPromptSchema.parse(body)

    const useCase = AgentFactory.getSendMessageUseCase()
    const result = await useCase.execute({ prompt, context })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Agent error:', error)
    return NextResponse.json(
      { error: 'Error procesando la solicitud' },
      { status: 500 }
    )
  }
}
