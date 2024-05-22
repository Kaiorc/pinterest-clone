import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

///////////////////////////////////////////////////////////////////////////
// Dados de exemplo para os cards que irão para a API                    //
const firstSectionCards = [                                              //
  { id: 1, image: 'https://via.placeholder.com/300', title: 'Card 1' },  //
  { id: 2, image: 'https://via.placeholder.com/300', title: 'Card 2' },  //
  { id: 3, image: 'https://via.placeholder.com/300', title: 'Card 3' },  // 
];                                                                       //
                                                                         //
// Dados de exemplo para os cards que irão para a API                    //
const secondSectionCards = [                                             //
  { id: 1, image: 'https://via.placeholder.com/300', title: 'Card A' },  //
  { id: 2, image: 'https://via.placeholder.com/300', title: 'Card B' },  //
  { id: 3, image: 'https://via.placeholder.com/300', title: 'Card C' },  //
  { id: 4, image: 'https://via.placeholder.com/300', title: 'Card D' },  //
  { id: 5, image: 'https://via.placeholder.com/300', title: 'Card E' },  //
  { id: 6, image: 'https://via.placeholder.com/300', title: 'Card F' },  //
  { id: 7, image: 'https://via.placeholder.com/300', title: 'Card G' },  //
  { id: 8, image: 'https://via.placeholder.com/300', title: 'Card H' },  //
  { id: 9, image: 'https://via.placeholder.com/300', title: 'Card I' },  //
  { id: 10, image: 'https://via.placeholder.com/300', title: 'Card J' }, //
];                                                                       //
///////////////////////////////////////////////////////////////////////////

const CustomGrid: React.FC = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Título Principal
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Primeira Seção */}
      <Box my={4}>
        <Typography variant='h4' align='center' gutterBottom>
          Primeira Seção
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          {firstSectionCards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component='img'
                  height='200'
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant='h6' component='div'>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Segunda Seção */}
      <Box my={4}>
        <Typography variant='h4' align='center' gutterBottom>
          Segunda Seção
        </Typography>
        <Grid container spacing={2}>
          {secondSectionCards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={2.4}>
              <Card>
                <CardMedia
                  component='img'
                  height='150'
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ position: 'relative', padding: 0 }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'white',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '5px',
                      borderRadius: '5px',
                    }}
                  >
                    <Typography variant='h6' component='div'>
                      {card.title}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomGrid;
