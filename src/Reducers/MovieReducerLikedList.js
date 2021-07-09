export const MovieReducerLikedList = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_LIKE_LIST":
      console.log(state);
      console.log("state w mopvie liked");
      // let index = state.findIndex((item) => item.id === action.movie.id);
      // if (index === -1)
      return [
        ...state,
        {
          id: action.likedMovies.id,
          title: action.likedMovies.title,
          img: action.likedMovies.img,
          img_medium: action.likedMovies.img_medium,
          linkToClick: action.likedMovies.linkToClick,
          description: action.likedMovies.description,
          publishedAt: action.likedMovies.publishedAt,
          viewCount: action.likedMovies.viewCount,
          likeCount: action.likedMovies.likeCount,
          liked: true,
        },
      ];

    //return [...state];
    case "REMOVE_MOVIE_LIKE_LIST":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
