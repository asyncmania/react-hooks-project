import React, { useState, useReducer, useEffect } from "react";

import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import appReducer from "./reducers";
import Header from "./Header";
import { StateContext, ThemeContext } from "./contexts";
import ChangeTheme from "./ChangeTheme";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl",
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl",
  },
];

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts,
  });
  const { user, posts } = state;

  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral",
  });

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hook Blog`;
    } else {
      document.title = "React Hooks Blog";
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <UserBar />
          <br />
          {user && <CreatePost />}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}
