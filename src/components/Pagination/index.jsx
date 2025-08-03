import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={6}
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '15px',

            '&:hover': {
              backgroundColor: '#ffc45fb4', // Цвет фона активной
              borderColor: '#999',
            },
          },
          '& .Mui-selected': {
            backgroundColor: '#ffc45fb4', // Цвет фона активной
            color: '#000000b4', // Цвет текста активной
          },
        }}
      />
    </Stack>
  );
}
