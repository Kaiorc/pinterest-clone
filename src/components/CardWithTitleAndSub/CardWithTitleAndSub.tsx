import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography, useTheme } from "@mui/material";

// Definindo a interface para as props
interface CardWithTitleAndSubProps {
  image: string;
  title: string;
}

export const CardWithTitleAndSub: React.FC<CardWithTitleAndSubProps> = ({ image, title }) => {

    const theme = useTheme();

    return (
    <CardActionArea>
        <Card sx={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            minHeight: '200px',
            position: 'relative',
        }}>
            <CardContent sx={{display:"flex", flexDirection:'column', alignItems: 'flex-start' }}>
                <Typography variant='h4' component='div'sx={{ margin:'2em 0', backgroundColor: 'secondary' }}>
                    {title}
                </Typography>
                <Box color='secondary' sx={{ border: "none", borderRadius: 10 }}>
                    <Typography variant='subtitle1' component='div'sx={{ padding:'0.3em', backgroundColor: '#f7f6f3', borderRadius: 10 }}>
                        Ver Mais
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </CardActionArea>
    );
};