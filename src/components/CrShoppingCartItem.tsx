
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChip from './CrChip';
import { CardActionArea, Grid } from '@mui/material';
import { CartItem } from '../types/CartItem';

interface Props {
  cartItem: CartItem
}

const CrShoppingCartItem = ({cartItem}:Props)=>  {
  return (
    <Card className="card" sx={{ height: '100%' }}>
      <CardActionArea>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              style={{ height: 140 }}
              image={cartItem.image}
              title={cartItem.title}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {cartItem.title.length > 20 ? `${cartItem.title.substring(0, 10)}...` : cartItem.title}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      </CardActions>
    </Card>
    );
}

export default CrShoppingCartItem