import React from 'react';
import { Card, CardActionArea, CardContent, Typography, useTheme } from "@mui/material";

interface CardWithTitleProps {
  image: string;
  title: string;
}

export const CardWithTitle: React.FC<CardWithTitleProps> = ({ image, title }) => {

    return (
        <CardActionArea>
            <Card sx={{ 
                backgroundImage: `url(${image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                height: '150px',
                position: 'relative'
            }}>
                <CardContent sx={{display:"flex", flexDirection:'column', alignItems: 'center' }}>
                    <Typography variant='h5' component='div'sx={{ margin:'2em 0', padding:'0.3em', backgroundColor: 'rgba(247, 246, 243, 0.6)', borderRadius: 10 }}>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};