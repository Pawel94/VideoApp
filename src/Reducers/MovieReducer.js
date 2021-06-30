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
      let index = state.findIndex((item) => item.id === action.movie.id);
      if (index === -1)
        return [
          ...state,
          {
            id: action.movie.id,
            title: action.movie.title,
            img: action.movie.img,
            linkToClick: action.movie.linkToClick,
          },
        ];
      return [...state];
    case "REMOVE_MOVIE":
      return state.filter((item) => item.id !== action.id);
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};
