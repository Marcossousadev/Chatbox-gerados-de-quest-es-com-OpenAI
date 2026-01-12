import { NextResponse } from "next/server"
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import {z} from "zod";
export async function POST(request: Request) {
    const { amount, topic } = await request.json();
    const result = await generateObject({
        model: openai('gpt-5-nano'),
        schema: z.object({
            questions: z.array(z.object({
                question: z.string().describe('O enunciado da questão formulada.'),
                alternatives: z.array(z.object({
                    description: z.string().describe('O texto da alternativa de resposta'),
                    isCorrect: z.boolean().describe('indica se a alternativa é correta ou incorreta')
                })).describe('As alternativas de resposta para a questão formulada')
            }).describe('Objeto que armazena os dados da questão gerada')).describe('Array de questões geradas')
        }),
        system:'Você é um assistente de IA que cria questões de múltipla alternativa baseada em um tópico fornecido pelo usuário.',
        prompt:`Gere um total de ${amount} questões para o tópico ${topic}. Cada questão deve ter 4 alternativas, sendo apenas uma correta.`
    })
    return NextResponse.json({message: result.object.questions});
}