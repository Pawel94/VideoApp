export const MovieReducer = (state, action) => {
  console.log("action");
  //console.log(action);
  console.log(state);
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
            img_medium: action.movie.img_medium,
            linkToClick: action.movie.linkToClick,
            description: action.movie.description,
            publishedAt: action.movie.publishedAt,
            linkToClick: action.movie.linkToClick,
            viewCount: action.movie.viewCount,
            likeCount: action.movie.likeCount,
          },
        ];
      return [...state];
    case "SORT_BY_TITLE":
      state.sort((a, b) => (a.title > b.title ? 1 : -1));
      console.table(state);
      return [...state];
    case "SORT_BY_DATA":
      state.sort((a, b) => (a.published > b.published ? 1 : -1));
      console.table(state);
      return [...state];
    case "REMOVE_MOVIE":
      return state.filter((item) => item.id !== action.id);
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};
