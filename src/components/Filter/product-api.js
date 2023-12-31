import axios from 'axios';

export async function fetchProducts() {
  try {
    const response = await axios.get(
      'https://656383fbee04015769a7535a.mockapi.io/product'
    );
    // const data = response.data;
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
