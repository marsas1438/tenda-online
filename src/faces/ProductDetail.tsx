
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChip from '../components/CrChip';
import CrRating from '../components/CrRating';
import { ProductType } from '../types/Product';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/ProductService'
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import dataCart from '../data/CommonData';

const ProductDetail = ()=>  {

  const {idProduct} = useParams();
  const [product, setProduct]  = useState<ProductType>();
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  const handleAddCartItem = (quantity: number) => {
    if (product != undefined) {
      dataCart.push({...product, quantity:quantity})
    }
  }
  
  const queryProduct = async () => {
    try {
      const dataProducts = await getProductById(idProduct!==undefined?parseInt(idProduct):0);
      setProduct(dataProducts);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    queryProduct();
  }, []);
  
  return (
    <Box sx={{
      marginTop: 5,
      display: 'flex',
      gap: 2,
  }}>
      {product!==undefined?<Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '60%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{product.title}</Typography>
            <Typography variant="h6" gutterBottom>Categoría: {product.category}</Typography>
            <Typography variant="h6" gutterBottom>Precio: ${product.price}</Typography>
            <Typography variant="body1" gutterBottom>{product.description}</Typography>
            <Button 
                    size="small"
                    variant='contained' onClick={handleClick}>Volver al inicio</Button>
            <Button 
                    size="small"
                    variant='contained' onClick={() => handleAddCartItem(1)}>Agregar al carrito</Button>
          </Grid>
        </Grid>
      </Container>:<></>}

  </Box>
        
  );
}

export default ProductDetail