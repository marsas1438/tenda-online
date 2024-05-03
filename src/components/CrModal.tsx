
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ProductType } from "../types/Product"
import { CardMedia } from '@mui/material';

interface Props {

    open: boolean
    handleClose: () => void
    handleDetail: () => void
    handleAdd: (quantity: number) => void
    product: ProductType
    };
  

export default function CrModal({open, handleClose, handleDetail, handleAdd ,product}: Props) {
 

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {product.title}
        </DialogTitle>
        <CardMedia    
        sx={{ height: 200}}
        component={'img'}
        image={product.image}
        title={product.image}
        style={{
          width: '200',
          height: '200',
          objectFit: "contain",
        }}
        alt='green iguana'
      />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>{product.description}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAdd(1)}>Agregar al carrito</Button>
          <Button onClick={handleDetail}>Detalle completo</Button>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
  );
}
