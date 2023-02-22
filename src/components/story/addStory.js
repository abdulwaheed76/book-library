import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextEditor from "./textEditor";
import Typography from "@mui/material/Typography";
import { TextField, Grid, MenuItem, Button, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postStory } from "../../store/story/storyAction";

export default function AddStory() {
  const { loading, success, error, stories } = useSelector(
    (state) => state.story
  );
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const storySchema = useFormik({
    initialValues: {
      title: "",
      visibility: "",
    },
    onSubmit: (value) => {
      console.log(value);
      value.description = description;
      dispatch(postStory(value));
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      visibility: Yup.string().oneOf(["public", "private"]).required(),
    }),
  });
  useEffect(() => {}, []);
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
              Create your story
            </Typography>
          </React.Fragment>
          <form onSubmit={storySchema.handleSubmit}>
            <Box sx={{ height: "50vh" }}>
              <TextEditor
                description={description}
                setDescription={setDescription}
              />
            </Box>
            <Box>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Story Title</Typography>
                  <TextField
                    id="title"
                    variant="outlined"
                    value={storySchema.values.title}
                    onChange={storySchema.handleChange}
                    error={
                      storySchema.touched.title &&
                      Boolean(storySchema.errors.title)
                    }
                    helperText={
                      storySchema.touched.title && storySchema.errors.title
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Visibility</Typography>
                  <TextField
                    id="visibility"
                    name="visibility"
                    value={storySchema.values.visibility}
                    onChange={storySchema.handleChange}
                    error={
                      storySchema.touched.visibility &&
                      Boolean(storySchema.errors.visibility)
                    }
                    helperText={
                      storySchema.touched.visibility &&
                      storySchema.errors.visibility
                    }
                    fullWidth
                    select
                  >
                    <MenuItem key={"public"} value="public">
                      Public
                    </MenuItem>
                    <MenuItem key={"private"} value="private">
                      Private
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Upload Video</Typography>
                  <TextField id="outlined-basic" fullWidth type="file" />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Upload Image</Typography>
                  <TextField id="outlined-basic" fullWidth type="file" />
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 6,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#ff3366",
                  // color: "#fff ",
                  "&:hover": { backgroundColor: "#ff3366" },
                  height: "60px",
                  width: "350px",
                }}
                size="large"
                color="primary"
                type="submit"
              >
                CREATE
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}
