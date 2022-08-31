import React from "react";
import { routeList } from "./routeList";
import { Routes, Route } from "react-router-dom";

export const RoutesList = () => {
  return (
    <Routes>
      {routeList.map((route) => {
        return (
          <Route
            key={route.title}
            path={route.path}
            element={route.component}
          />
        );
      })}
    </Routes>
  );
};
