import axios, { AxiosResponse } from 'axios';


export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
}


export interface Image {
    id: number;
    url: string;
  }
  

  export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];  
    image:string
  }
  export interface Category {
    id: number;
    name: string;
  }

const api = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});



export const getProducts = async (): Promise<Product[]> => {
  const response: AxiosResponse<{ products: Product[] }> = await api.get('/products');
  return response.data.products;
};


export const getCategoryList = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>('https://dummyjson.com/products/category-list');
  
  return response.data;
};