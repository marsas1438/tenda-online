
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChip from './CrChip';
import CrRating from './CrRating';
import { Product } from '../types/Product';

interface Props {
  product: Product
}

const CrCard = ({product}:Props)=>  {
  return (
    <div className="app">
      <div className="card-container">
        <Card className="card">
          <CardMedia
            sx={{ height: 140}}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <CrChip/>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <CrRating/>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained'>Agregar</Button>
            
          </CardActions>
        </Card>
      </div>
    </div>
  );
}


export default CrCard