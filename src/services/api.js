import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('#');
    return response.data;
  } catch (error) {
    console.error('error ', error);
    
  }
};
