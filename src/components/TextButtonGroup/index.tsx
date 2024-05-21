import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtonGroup() {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="text">Página Inicial</Button>
      <Button variant="text">Explorar</Button>
      <Button variant="text">Criar</Button>
    </Stack>
  );
}