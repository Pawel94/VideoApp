import React, { useContext, useState } from "react";
import VideoListDetails from "./VideoListDetails";
import { MovieContex } from "../../Context/MovieContex";
import ButtonDropdownComponent from "./ButtonDrop";
import VideoGridDetails from "./VideoGridDetails";
import PaginationComponent from "./PaginationComponent";
const VideoLikedMain = () => {
  const { movies, likedMovies } = useContext(MovieContex);
  const [viewState, setViewState] = useState("List");
  const [listOption, setlistOption] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostPerPage] = useState(2);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  listOption
    ? (currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost))
    : (currentMovies = likedMovies.slice(indexOfFirstPost, indexOfLastPost));

  return (
    <div class="row">
      <h3 class="d-flex justify-content-center font-weight-bold">
        YOUR LIKED LIST
      </h3>

      <ButtonDropdownComponent
        setViewState={setViewState}
        movies={movies}
        setpostPerPage={setpostPerPage}
        setlistOption={setlistOption}
        listOption={listOption}
      />
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />
      {movies.length === 0 ? <p>ADD VIDEO TO LIKE LIST :)</p> : null}
      {viewState === "List"
        ? currentMovies.map((movie) => {
            return <VideoListDetails key={movie.id} movie={movie} />;
          })
        : null}
      {viewState === "Grid"
        ? currentMovies.map((movie) => {
            return <VideoGridDetails key={movie.id} movie={movie} />;
          })
        : null}
    </div>
  );
};
export default VideoLikedMain;
