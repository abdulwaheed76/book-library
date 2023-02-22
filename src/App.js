// import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./views/register";
import Login from "./views/login";
import TextEditor from "./components/story/textEditor";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import AddStory from "./components/story/addStory";
import PreviewStory from "./components/story/previewStory";
import Stories from "./views/stories";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/global/theme";
import SinglStory from "./components/story/singleStory";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<ProtectedRoute />}>
          </Route>
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} /> 
          <Route path="/user/addStory" element={<AddStory/>}/> 
          <Route path="/user/previewStory" element={<PreviewStory/>}/> 
          <Route path="/user/stories" element={<Stories/>}/> 
          <Route path="/user/mystory" element={<SinglStory/>}/> 
        </Routes>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;