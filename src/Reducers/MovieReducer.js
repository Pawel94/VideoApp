export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "NOT_LIKE_MOVIE":
      state.findIndex((item) =>
        item.id === action.id ? (item.liked = false) : null
      );
      return [...state];
    case "LIKE_MOVIE":
      state.findIndex((item) =>
        item.id === action.id ? (item.liked = !item.liked) : null
      );

      return [...state];
    case "ADD_MOVIE_likess":
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
          viewCount: action.movie.viewCount,
          likeCount: action.movie.likeCount,
          //liked: true,
        },
      ];
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
            viewCount: action.movie.viewCount,
            likeCount: action.movie.likeCount,
            liked: false,
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
    case "SORT_BY_LIKE":
      console.log("state liked");
      console.log(state);
      console.log(action);
      let talbe = state.filter((item) => {
        if (item.liked === true) return item;
      });
      console.table("state in LIKES");
      console.table(talbe);
      console.table("state in LIKES");
      console.table(state);
      return [...talbe];
    case "SORT_BY_DEFOULT":
      console.table("state");
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
