import "./App.css";
import NavBar from "./Components/NavBar";
import MainPanel from "./Components/MainPanel";
import MovieProvider from "./Context/MovieContex";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoLikedMain from "./Components/LikedVideos/VideoLikedMain";
function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPanel}></Route>
          <Route path="/likedVideos" component={VideoLikedMain}></Route>
        </Switch>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
