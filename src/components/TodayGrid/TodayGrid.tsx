import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { CardWithSubAndTitle } from '../CardWithSubAndTitle/CardWithSubAndTitle';
import { getInspireSectionImages } from '../../shared/services/api/inspireSectionImages';

const TodayGrid: React.FC = () => {
  const [InspireSectionImages, setInspireSectionImages] = React.useState([])

  React.useEffect(() => {
    fetchInspireSectionImages()
    console.log(InspireSectionImages)
  },[])

  async function fetchInspireSectionImages() {
    const ImagesFromAPI = await getInspireSectionImages()
    setInspireSectionImages(ImagesFromAPI)
  }

  const inspireSectionImages = InspireSectionImages.map((card: { id: number, image: string, title: string, subtitle: string }) => {
    return (
      <Grid item key={card.id} xs={12} sm={6} md={4}>
        <CardWithSubAndTitle image={card.image} title={card.title} subtitle={card.subtitle} />
      </Grid>
    )
  })

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
            {inspireSectionImages}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TodayGrid;
