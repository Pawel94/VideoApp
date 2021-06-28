import "./App.css";
import NavBar from "./Components/NavBar";
import MainPanel from "./Components/MainPanel";
import MovieProvider from "./Context/MovieContex";
function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
        <MainPanel />
      </div>
    </MovieProvider>
  );
}

export default App;
