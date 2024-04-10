import {Ai} from '@cloudflare/ai'
import {Hono} from 'hono'

import index from './index.html'


const app = new Hono()

app.get('/', c =>{
	return c.html(index)
})

app.get("/stream", async c => {
	const ai = new Ai( c.env.AI )

		const query = c.req.query("query")

		const question = query || 'What is the square root of 9'

		const messages = [
			// {role: "system", content: "You are pirate "}, // use this as a way to set how you want api to speak
			{role: "system", content: "You are a friendly assistant "},
			// {role: "assistance", content: "You should alawys respond in a sentence or two"},
			{role: "user", content: question}
		]

		const aiResponse = await ai.run('@cf/meta/llama-2-7b-chat-int8', {messages, stream: true}
	)

	return new Response(aiResponse, {
		headers: {
			'Content-Type' : 'text/event-stream'
		}
	})
	
})


	app.post('/', async c =>{
		const ai = new Ai( c.env.AI )

		const body = await c.req.json()
		const question =body.query || 'What is the square root of 9'

		const messages = [
			// {role: "system", content: "You are pirate "}, // use this as a way to set how you want api to speak
			{role: "system", content: "You are a friendly assistant "},
			{role: "assistance", content: "You should alawys respond in a sentence or two"},
			{role: "user", content: question}
		]

		const aiResponse = await ai.run('@cf/meta/llama-2-7b-chat-int8', {messages, stream: true})
		return c.text(aiResponse.response)
	})

export default app;
