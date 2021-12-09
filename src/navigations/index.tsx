import React from "react";
import { Route, Routes } from "react-router-dom";

import MainTemplate from "../templates/MainTemplate";
import NotFound from "../pages/NotFound";

import Testing from "../pages/Testing";
import Testing2 from "../pages/Testing2";

export const MainNavigation = (): React.ReactElement => {
  return (
    <Routes >
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<Testing />} />
        <Route path="testing2" element={<Testing2 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}



