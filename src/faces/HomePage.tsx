import { Box, Grid } from "@mui/material"
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
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item) => (      
            products.map((product : Product) => {
              return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                  <CrCard
                    product={product}
                  />
                </Grid>
              )
            })
          ))}
        </Grid>

        </Box>
        
    </>
    
  )
}

export default HomePage
