import { UIMessage } from "ai";
import { Message, MessageContent, MessageResponse } from "./ai-elements/message";


type Props = {
    message: UIMessage

}
export function AssistantMessage({message} : Props){
    const textParts = message.parts.filter(part => part.type === 'text');
    const text = textParts.map(part => part.text).join(' ');
    return (
         <Message from={message.role}>
            <MessageContent>
                <MessageResponse>
                    {text}
                </MessageResponse>
            </MessageContent>
         </Message>
    )
}