import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

export const getMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/messages`, {
      text: message,
      sender: 'You',
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
