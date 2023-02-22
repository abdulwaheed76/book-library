import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:3000"

export const postStory = createAsyncThunk(
  "auth/register",
  async ({ title, description,visibility, imageUrl,userId,postedBy}, { rejectWithValue }) => {
    console.log(title, description, imageUrl,userId,postedBy)
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/api/story/createStory`,
        { title,description,visibility,imageUrl,userId,postedBy},
        config
      );
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getStory = createAsyncThunk(
    "auth/register",
    async ({}, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axios.get(
          `${backendURL}/api/story`,
          config
        );
      } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
  