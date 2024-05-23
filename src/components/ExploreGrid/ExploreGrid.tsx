import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { CardWithTitleAndSub } from '../CardWithTitleAndSub/CardWithTitleAndSub';
import { CardWithTitle } from '../CardWithTitle/CardWithTitle';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dados de exemplo para os cards que irão para a API                    
const firstSectionCards = [                                            
  { id: 1, image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Decoração' },  
  { id: 2, image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"  , title: 'Natureza' },  
  { id: 3, image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Pets' },  
];                                                                       
                                                                         
// Dados de exemplo para os cards que irão para a API                    
const secondSectionCards = [                                             
  { id: 1, image: "https://images.unsplash.com/photo-1559666126-84f389727b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MjA5NTV8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Paisagens' },  
  { id: 2, image: "https://images.unsplash.com/photo-1560830906-9c1c207e2599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MjEwNTB8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Arte' },  
  { id: 3, image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Estações' },  
  { id: 4, image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MjEyNTN8&ixlib=rb-4.0.3&q=80&w=1080', title: 'Sobremesas' },  
  { id: 5, image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Fotografia' },  
  { id: 6, image: "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Animais' },  
  { id: 7, image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MjIzNjR8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Música' },
  { id: 8, image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Retro' },  
  { id: 9, image: "https://images.unsplash.com/photo-1583482183620-f692113aafc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTUxMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY0MjI1NDN8&ixlib=rb-4.0.3&q=80&w=1080", title: 'Teatro' },  
  { id: 10, image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", title: 'Tatoo' }, 
];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ExploreGrid: React.FC = () => {
  return (
    <Box sx={{ width:"100%", height:"100vh", margin: 0, padding: 0 }}>
      <Box sx={{ padding: "0 10em 2em 10em", margin: 0 }}>
        {/* Seção - Explore */}
        <Box my={4} sx={{ margin: '0 0 4em 0' }}>
          <Typography variant='h3' align='center' sx={{ marginBottom: '1.2em' }}>
            Explore o melhor do Pinterest
          </Typography>
          <Grid container spacing={2} justifyContent='center'>
            {firstSectionCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <CardWithTitleAndSub image={card.image} title={card.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Seção - Interesses */}
        <Box my={4}>
          <Typography variant='h5' align='center' sx={{ marginBottom: '1.8em' }}>
            Descubra interesses
          </Typography>
          <Grid container spacing={2}>
            {secondSectionCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={2.4}>
                <CardWithTitle image={card.image} title={card.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreGrid;