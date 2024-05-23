import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { CardWithTitleAndSub } from '../CardWithTitleAndSub/CardWithTitleAndSub';
import { CardWithTitle } from '../CardWithTitle/CardWithTitle';
import { getExploreSectionImages } from '../../shared/services/api/exploreSectionImages';
import { getDiscoverSectionImages } from '../../shared/services/api/discoverSectionImages';

const ExploreGrid: React.FC = () => {
  const [ExploreSectionImages, setExploreSectionImages] = React.useState([])
  const [DiscoverSectionImages, setDiscoverSectionImages] = React.useState([])

  React.useEffect(() => {
    fetchExploreSectionImages()
    fetchDiscoverSectionImages()
    console.log(ExploreSectionImages)
    console.log(DiscoverSectionImages)
  },[])

  async function fetchExploreSectionImages() {
    const ImagesFromAPI = await getExploreSectionImages()
    setExploreSectionImages(ImagesFromAPI)
  }

  async function fetchDiscoverSectionImages() {
    const ImagesFromAPI = await getDiscoverSectionImages()
    setDiscoverSectionImages(ImagesFromAPI)
  }

  const exploreSectionImages = ExploreSectionImages.map((card: { id: number, image: string, title: string }) => {
    return (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <CardWithTitleAndSub image={card.image} title={card.title} />
        </Grid>
    )
  })

  const discoverSectionImages = DiscoverSectionImages.map((card: { id: number, image: string, title: string }) => {
    return (
      <Grid item key={card.id} xs={12} sm={6} md={2.4}>
        <CardWithTitle image={card.image} title={card.title} />
      </Grid>
    )
  })

  return (
    <Box sx={{ width:"100%", height:"100vh", margin: 0, padding: 0 }}>
      <Box sx={{ padding: "0 10em 2em 10em", margin: 0 }}>
        {/* Seção - Explore */}
        <Box my={4} sx={{ margin: '0 0 4em 0' }}>
          <Typography variant='h3' align='center' sx={{ marginBottom: '1.2em' }}>
            Explore o melhor do Pinterest
          </Typography>
          <Grid container spacing={2} justifyContent='center'>
            {exploreSectionImages}
          </Grid>
        </Box>
        {/* Seção - Interesses */}
        <Box my={4}>
          <Typography variant='h5' align='center' sx={{ marginBottom: '1.8em' }}>
            Descubra interesses
          </Typography>
          <Grid container spacing={2}>
            {discoverSectionImages}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreGrid;