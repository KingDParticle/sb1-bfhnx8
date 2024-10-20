import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const generateChatResponse = async (messages: { role: 'user' | 'assistant', content: string }[]) => {
  try {
    const response = await axios.post(`${API_URL}/api/chat`, { messages });
    return response.data.response;
  } catch (error) {
    console.error('Error generating chat response:', error);
    return "I'm sorry, I'm having trouble processing your request right now. Please try again later.";
  }
};