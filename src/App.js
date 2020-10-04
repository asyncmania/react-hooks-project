import React, { useState, useReducer, useEffect } from "react";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import appReducer from "./reducers";
import Header from "./Header";
import { StateContext, ThemeContext } from "./contexts";
import ChangeTheme from "./ChangeTheme";
import { useResource } from "react-request-hook";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
    error: "",
  });

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  const { user, error } = state;

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: "POSTS_ERROR" });
    }

    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data });
    }
  }, [posts]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
          <br />
          {user && <CreatePost />}
          {error && <b>{error}</b>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}
