import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export default function PaginationButtons({ currentPage, onChangePage }: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(event, page) => {
          onChangePage(page);
        }}
        count={3}
        page={currentPage}
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
