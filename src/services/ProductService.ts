import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId: number) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};