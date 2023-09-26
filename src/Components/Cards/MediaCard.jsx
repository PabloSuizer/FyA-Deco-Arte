import React from 'react';
import './MediaCard.css'

const MediaCard = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">
          {buttonText}
          <span aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default MediaCard;












// import { Button, Card, CardContent, CardMedia, Typography, CardActions, CardActionArea } from "@mui/material";
// import mermelada from '../../assets/Rectangle.png';

// export default function MediaCard() {
//   return (
//     <Card sx={{
//       maxWidth: 445,
//       transition: "0.2s", "&.hover":{
//       transform: "scale(3.05),"
//       }}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           sx={{ height: 140 }}
//           image={mermelada}
//           alt="bolso matero"
//         />
//         <CardContent>
//           <Typography variant="h5">Card Title</Typography>
//           <Typography component="p" variant="body2">
//             hola soy el contenido de la card
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button variante="contained">Ver Mas</Button>
//       </CardActions>
//     </Card>
//   )
// }