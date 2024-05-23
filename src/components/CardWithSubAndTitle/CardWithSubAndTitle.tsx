import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography, useTheme } from "@mui/material";

// Definindo a interface para as props
interface CardWithSubAndTitleProps {
  image: string;
  title: string;
  subtitle: string;
}

export const CardWithSubAndTitle: React.FC<CardWithSubAndTitleProps> = ({ image, title, subtitle }) => {

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
            <CardContent sx={{display:"flex", flexDirection:'column', alignItems: 'center', alignContent: 'flex-end', margin: '4em 0 2em 0', marginBottom:'0'}}>
                <Box color='secondary' sx={{ border: "none", borderRadius: 10, marginTop:'4em' }}>
                    <Typography variant='subtitle1' component='div'sx={{ padding:'0.4em 0.6em', backgroundColor: '#f7f6f3', borderRadius: 10 }}>
                        {subtitle}
                    </Typography>
                </Box>
                <Typography variant='h4' component='div'sx={{  padding:'0.2em 0.6em', marginTop:'1em', backgroundColor: '#f7f6f3', borderRadius: 10 }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    </CardActionArea>
    );
};