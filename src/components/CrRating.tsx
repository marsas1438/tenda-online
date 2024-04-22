import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { RatingType } from '../types/Rating';

interface Props {
  rating: RatingType
}

const CrRating = ({rating}:Props)=>  {
  const [value, setValue] = React.useState<number | null>(rating.rate);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Calificación</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

export default CrRating