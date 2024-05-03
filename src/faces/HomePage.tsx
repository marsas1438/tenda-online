import { Box, Grid, LinearProgress, makeStyles } from "@mui/material"
import CrCard from "../components/CrCard"
import { useEffect, useState } from "react"
import { ProductType } from '../types/Product'
import { getProducts } from '../services/ProductService'

const HomePage = () => {

  const [loading, setLoading]  = useState<boolean>(true);
  const [products, setProducts]  = useState<ProductType[]>([]);

  const queryProducts = async () => {
    try {
      const dataProducts = await getProducts();
      setProducts(dataProducts);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    queryProducts();
  }, []);
    
  return (
        <Box sx={{
            marginTop: 5,
            display: 'flex',
            gap: 2,
        }}>
        {loading?<LinearProgress />:
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item) => (      
            products.map((product : ProductType) => {
              return(
                <Grid item xs={2} sm={6} md={6} lg={3} key={item}>
                  <CrCard
                    product={product}
                  />
                </Grid>
              )
            })
          ))}
        </Grid>
        }

        </Box>
            
  )
}

export default HomePage
