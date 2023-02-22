import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AllStories() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="xl">
        <Box sx={{ mt: 7, flexGrow: 1 }}>
      <React.Fragment>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          All Stories
        </Typography>
      </React.Fragment>
      </Box>
      <Box sx={{ mt: 7, mb: 12, flexGrow: 1 }}>
        <Grid
          container="md"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(5)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 445, mt: 7 }}>
                <CardMedia
                  sx={{ height: 350 }}
                  image="https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: 0,
                    m: 1,
                  }}
                >
                  <Button size="small" color="secondary">
                    More
                  </Button>
                  <Box>
                    <IconButton size="small">
                      <ThumbUpIcon />
                    </IconButton>

                    <IconButton size="small">
                      <ThumbDownIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
