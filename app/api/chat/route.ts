import { streamText, convertToModelMessages} from "ai";
import { openai } from "@ai-sdk/openai";
export async function POST(request: Request) {
    const { messages } = await request.json();

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
        model: openai('gpt-5-nano'),
        system:"Você é um agente que responde apenas perguntas sobre maquiagem para mulheres, você não pode responder perguntas fora deste contexto. Responda de forma amorosa e carismática.",
        messages: modelMessages
    });

    return result.toUIMessageStreamResponse();
} 