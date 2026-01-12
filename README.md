# Chatbox-gerados-de-quest-es-com-OpenAI
Projeto q uma SDK da Vercel para criar um agente de IA que gera questões sobre determinados assuntos, algo básico.


Como testar?
1. Clone o projeto (git clone URL_Projeto Github)
2. Instale as dependências
3. Rode o projeto <code>npm run dev</code>
4. Crie um .env.local
5. Crie no .emv.local a variável OPENAI_API_KEY, crie essa chave em https://platform.openai.com/settings/organization/api-keys, realizando seu Login
6. Faça um POST para http://localhost:PORTA_PROJETO_RODANDO NA SUA MÁQUINA/api/questions
7. No Body da requisição forneça um Exemplo:<code>
{
"amount": 4,
"topic":"Programação"
}
</code>
