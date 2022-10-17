import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios('https://api.escuelajs.co/api/v1/products');
      setProducts(response.data);
    })();
  }, []);
  return products;
};

export default useGetProducts;
