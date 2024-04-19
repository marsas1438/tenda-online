import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CrButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color='secondary'>Contained</Button>
    </Stack>
  );
}