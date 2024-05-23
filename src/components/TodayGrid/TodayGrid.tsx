import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import { CardWithSubAndTitle } from '../CardWithSubAndTitle/CardWithSubAndTitle';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                               
// Dados de exemplo para os cards que irão para a API                    
const secondSectionCards = [                                             
  { id: 1, image: "https://images.unsplash.com/photo-1578301978961-a526d6fb0d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MzY4MTF8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Pinturas Famosas', subtitle: 'Pinturas em óleo famosas' },  
  { id: 2, image: "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0Mzc1MTJ8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Coelhos Fofinhos', subtitle: 'Animais fofos' },  
  { id: 3, image: "https://images.unsplash.com/photo-1589108447715-19b681f5c4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0Mzc2OTV8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Cortes', subtitle: 'Corte cabelo curto mulher' },  
  { id: 4, image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MjEyNTN8&ixlib=rb-4.0.3&q=80&w=1080', title: 'Sobremesas', subtitle: 'Sorvetes' },  
  { id: 5, image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Fotografia colorida', subtitle: 'Foto fundo colorido' },  
  { id: 6, image: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Animais da savana', subtitle: 'Girafa golden hour' },   
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TodayGrid: React.FC = () => {
  return (
    <Box sx={{ width:"100%", height:"100vh", margin: 0, padding: 0 }}>
      <Box sx={{ padding: "0 10em 2em 10em", margin: 0 }}>
        <Typography variant='h5' textAlign="center">
          23 de Maio de 2024
        </Typography>
        {/* Seção - Inpire-se */}
        <Box my={4}>
          <Typography variant='h3' align='center' sx={{ marginBottom: '1em' }}>
            Inspire-se
          </Typography>
          <Grid container spacing={2}>
            {secondSectionCards.slice(0, 6).map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <CardWithSubAndTitle image={card.image} title={card.title} subtitle={card.subtitle} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TodayGrid;
