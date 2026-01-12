'use client'

import React from 'react'
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton
} from '@/components/ai-elements/conversation'
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea
} from '@/components/ai-elements/prompt-input'
import { useChat } from '@ai-sdk/react'
import { MessageSquareIcon } from 'lucide-react'
import { UserMessage } from '@/components/user-message'
import { AssistantMessage } from '@/components/assistant-message'

export default function Page() {
  const [input, setInput] = React.useState('')
  const { messages, sendMessage } = useChat()

  function handleSubmit() {
    if (!input.trim()) return

    sendMessage({ text: input })
    setInput('')
  }

  return (
    <div className="flex h-screen w-full justify-center bg-background">
      <div className="flex h-full w-full max-w-4xl flex-col px-4 py-6">
        
        {/* Header */}
        <div className="mb-4 flex items-center gap-2 border-b pb-3">
          <MessageSquareIcon className="h-5 w-5 text-muted-foreground" />
          <h1 className="text-sm font-medium text-muted-foreground">
            AI Programming Assistant
          </h1>
        </div>

        {/* Conversation */}
        <div className="relative flex-1 overflow-hidden rounded-xl border bg-card">
          <Conversation className="absolute inset-0">
            <ConversationContent className="px-4 py-6">
              {messages.length === 0 ? (
                <ConversationEmptyState
                  icon={<MessageSquareIcon className="h-6 w-6" />}
                  title="Start a conversation"
                  description="Ask a programming question and the AI will help you."
                />
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map(message => {
                    if (message.role === 'user') {
                      return (
                        <UserMessage
                          key={message.id}
                          message={message}
                        />
                      )
                    }

                    return (
                      <AssistantMessage
                        key={message.id}
                        message={message}
                      />
                    )
                  })}
                </div>
              )}
            </ConversationContent>

            <ConversationScrollButton className="bottom-4 right-4" />
          </Conversation>
        </div>

        {/* Prompt */}
        <div className="mt-4">
          <PromptInput
            onSubmit={handleSubmit}
            className="rounded-xl border bg-card shadow-sm"
          >
            <PromptInputBody>
              <PromptInputTextarea
                placeholder="Ask a programming question…"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="min-h-[56px] resize-none"
              />
            </PromptInputBody>

            <PromptInputFooter className="justify-end">
              <PromptInputSubmit />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  )
}
