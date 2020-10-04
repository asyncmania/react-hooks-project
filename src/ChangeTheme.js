import React from "react";

import { useEffect, useState } from "react";

import { useResource } from "react-request-hook";

const THEMES = [
  { primaryColor: "deepskyblue", secondaryColor: "coral" },
  { primaryColor: "orchid", secondaryColor: "mediumseagreen" },
];

function ThemeItem({ theme, active, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        paddingLeft: 8,
        fontWeight: active ? "bold" : "normal",
      }}
    >
      <span style={{ color: theme.primaryColor }}>Primary</span> /{" "}
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
}

export default function ChangeTheme({ theme, setTheme }) {

  const [ themes, getThemes ] = useResource(() => ({
    url: '/themes',
    method: 'get'
  }))


  const { data, isLoading } = themes

  useEffect(getThemes, [])

  function isActive(th) {
    return (
      th.primaryColor === theme.primaryColor &&
      th.secondaryColor === theme.secondaryColor
    );
  }

  return (
    
    <div>
      { isLoading && 'Lading themes...'}
      Change Theme:
      {data && data.map((t, i) => (
        <ThemeItem key={"theme" + i} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
      ))}
    </div>
  );
}
