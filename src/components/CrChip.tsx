
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CrChip() {
  return (
    <Stack spacing={1} sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1, // Establece el z-index para que se muestre delante del CardMedia
    }}>
      <Stack direction="row" spacing={1}>
        <Chip label="10% descuento" color="success" />
      </Stack>
    </Stack>
  );
}