import { UIMessage } from "ai";
import { Message, MessageContent } from "./ai-elements/message";


type Props = {
    message: UIMessage

}
export function UserMessage({message} : Props){
    const textParts = message.parts.filter(part => part.type === 'text');
    const text = textParts.map(part => part.text).join(' ');
    return (
         <Message from={message.role}>
            <MessageContent>{text}</MessageContent>
         </Message>
    )
}