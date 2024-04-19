import { Box } from "@mui/material"
import CrCard from "../components/CrCard"
import CrNavBar from "../components/CrNavBar"
import { useEffect, useState } from "react"
import { Product } from '../types/Product'
import { getProducts } from '../services/ProductService'


const HomePage = () => {

  const [products, setProducts]  = useState<Product[]>([]);

  const queryProducts = async () => {
    try {
      const dataProducts = await getProducts();
      setProducts(dataProducts);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    queryProducts();
  }, []);
    
  return (
    <>
        <CrNavBar/>
        <Box sx={{
            marginTop: 5,
            display: 'flex',
            gap: 2,
        }}>
        {products.map((product : Product) => {
          return(<CrCard
            product={product}
          />)
        })}
        </Box>
        
    </>
    
  )
}

export default HomePage
