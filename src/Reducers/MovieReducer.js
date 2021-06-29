export const MovieReducer = (state, action) => {
  console.log("reducer");
  switch (action.type) {
    // case "ADD_MOVIE":
    //   return [
    //     {
    //       id: action.movie.id,
    //       title: action.movie.title,
    //       img: action.movie.img,
    //       linkToClick: action.movie.linkToClick,
    //     },
    //   ];
    case "ADD_MOVIE_TO_LIKE_LIST":
      return [
        ...state,
        {
          id: action.movie.id,
          title: action.movie.title,
          img: action.movie.img,
          linkToClick: action.movie.linkToClick,
        },
      ];
    case "REMOVE_MOVIE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
