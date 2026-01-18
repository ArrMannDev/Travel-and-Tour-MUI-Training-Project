import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({cardImage,cardTitle,cardDescription}) {
  return (
    <Card sx={{ maxWidth: 400, ":hover": { transform: "scale(1.05)" }, transition: "transform 0.3s ease-in-out  0s " }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={cardImage}
          alt="green iguana"
          overflow="hidden"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
