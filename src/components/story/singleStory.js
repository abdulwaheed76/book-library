import { Box, Container, Paper, Typography, Grid, Card } from "@mui/material";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions'
import { styled } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
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

export default function SinglStory() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 7, mb: 12 }}>
        <Paper
          background="light"
          sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
        >
          <React.Fragment>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              {"Story Title"}
            </Typography>
          </React.Fragment>
          <Box sx={{ mt: 6 }}>
            <Grid container>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="350"
                  image="https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton size="small">
                    <ThumbUpIcon />
                  </IconButton>

                  <IconButton size="small">
                    <ThumbDownIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    m:1,
                    display: "flex",
                    alignItems: "center",
                    maxWidth: 800,
                  }}
                >
                  <Avatar alt="Remy Sharp" src={"https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg"} />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="comment here"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  >
                    <SendIcon />
                  </IconButton>
                </Paper>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg" />
                      </Grid>
                      <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                          Michel Michel
                        </h4>
                        <p style={{ textAlign: "left" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean luctus ut est sed faucibus. Duis bibendum
                          ac ex vehicula laoreet. Suspendisse congue vulputate
                          lobortis. Pellentesque at interdum tortor. Quisque
                          arcu quam, malesuada vel mauris et, posuere sagittis
                          ipsum. Aliquam ultricies a ligula nec faucibus. In
                          elit metus, efficitur lobortis nisi quis, molestie
                          porttitor metus. Pellentesque et   neque risus. Aliquam
                          vulputate, mauris vitae tincidunt interdum, mauris mi
                          vehicula urna, nec feugiat quam lectus vitae ex.{" "}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                          posted 1 minute ago
                        </p>
                      </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
