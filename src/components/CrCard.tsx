
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChip from './CrChip';
import CrRating from './CrRating';
import { ProductType } from '../types/Product';

interface Props {
  product: ProductType
}

const CrCard = ({product}:Props)=>  {
  return (
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
            <CrRating
              rating={product.rating}
            />
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained'>Agregar</Button>
            
          </CardActions>
        </Card>
  );
}

export default CrCard