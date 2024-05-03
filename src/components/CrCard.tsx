
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChip from './CrChip';
import CrRating from './CrRating';
import { ProductType } from '../types/Product';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { Box, CardActionArea, Skeleton } from '@mui/material';
import { useState } from 'react';
import CrModal from './CrModal';
import dataCart from '../data/CommonData';

interface Props {
  product?: ProductType
}

const styles = {
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
};

const CrCard = ({product}:Props)=>  {
  
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickDetail = () => {
    navigate(`/detalle/${product!==undefined?product.id:'0'}`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCartItem = (quantity: number) => {
    if (product != undefined) {
      dataCart.push({...product, quantity:quantity})
      setOpen(false);
    }
    navigate('/');
  }

  return (
        <>
          <Card className="card" sx={{ height: '100%' }}>
            <CardActionArea onClick={handleClickDetail}>
              <Box position="relative">
        {product == null ? (
				  <></>
			  ) : (
              <CrChip/>
        )}
			  {product == null ? (
				  <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
			  ) : (
              <CardMedia component="img"
                style={{ height: 200 }}
                image={product.image}
                title={product.title}
              />
			 )}
              </Box>
              <CardContent>
			  {product == null ? (
            <Skeleton animation="wave" height={150} style={{ marginBottom: 1 }} />
				) : (
          <>
                <Typography gutterBottom variant="h6" component="div">
                {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                </Typography>
                </>
				)}
        {product == null ? (
            <Skeleton animation="wave" height={50} style={{ marginBottom: 1 }} />
				) : (
                <CrRating
                  rating={product.rating}
                />
              )}
              </CardContent>
            </CardActionArea>
            <CardActions style={styles.cardActions}>
              {product == null ? (
				  <></>
			  ) : (
              <Button 
                      size="small"
                      variant='contained' onClick={handleClickOpen}><VisibilityIcon></VisibilityIcon> Agregar al carrito</Button>
            )}
            </CardActions>
          </Card>
          {product == null ? (
				  <></>
			  ) : (
          <CrModal open={open} handleClose={handleClose} handleDetail={handleClickDetail} handleAdd={handleAddCartItem} product={product}/>
        )}
        </>
  );
}

export default CrCard