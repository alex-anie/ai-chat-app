*This is a submission for the [Cloudflare AI Challenge](https://dev.to/devteam/join-us-for-the-cloudflare-ai-challenge-3000-in-prizes-5f99).*

![Ai Chat app.png](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n07bc0vrajjglp2ll4jx.png)

# ChatGPT AI chat model with Llama2, Workers AI Model, Hono.js and Wranger.


# What I Built

A ChatGPT app using llama-2-7b-chat-int8 model from Cloudflare. Implemented with Worker AI, Hono.js

# Demo

Features:

- History panel
- Content Streaming
- New Chat functionality 

👉 [Link to project](https://ai-chat-app.ocxigin.workers.dev/)




![Ai Chat app.gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v5sw313ihvtx15zv2gze.gif)

[Link to the project](https://ai-chat-app.ocxigin.workers.dev/)

# GitHub Code

[Link to GitHub repo](https://github.com/alex-anie/ai-chat-app.git)

# Implementation

This app is built to function exactly like ChatGPT. You can ask questions and the app will generate a stream response. It has a history panel to track previous prompts, which is useful for tracking what you entered.

I used the following tools to accomplish this task.

- **[Llama](https://developers.cloudflare.com/workers-ai/models/llama-2-7b-chat-fp16/) A text generator language model
- **[Hono.js](https://hono.dev/)**: A web framework for Cloudflare Workers
- **[Worker AI](https://developers.cloudflare.com/workers-ai/)**: To run machine learning models, on the Cloudflare network,