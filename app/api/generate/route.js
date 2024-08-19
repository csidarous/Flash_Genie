import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

export async function POST(req) {
  // Retrieve the OpenAI API key from environment variables
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'OpenAI API key is missing' }, { status: 500 });
  }

  // Create a new instance of the OpenAI client with the API key
  const openai = new OpenAI({ apiKey });

  const data = await req.text(); // Parse the text body of the incoming request
  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: data }
  ];

  try {
    // Create a chat completion request to the OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // Specify the model to use
      messages: messages,
    });

    // Extract the response content
    const responseText = completion.choices[0].message.content;
    const flashcards = JSON.parse(responseText);

    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards);

  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
  }
}
