import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In a production environment, API requests should be made from a backend server
});

export const generateChatResponse = async (messages: { role: 'user' | 'assistant', content: string }[]) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for lead generation, specializing in website creation and chatbot integration." },
        ...messages
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chat response:', error);
    return "I'm sorry, I'm having trouble processing your request right now. Please try again later.";
  }
};