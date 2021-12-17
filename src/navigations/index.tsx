import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainTemplate from "../templates/MainTemplate";
// import NotFound from "../pages/NotFound";

// import Testing from "../pages/Testing";
// import Testing2 from "../pages/Testing2";

const NotFound = lazy(() => import("../pages/NotFound"));

const Testing = lazy(() => import("../pages/Testing"));
const Testing2 = lazy(() => import("../pages/Testing2"));

const loadingComponent = <p>Loading...</p>;

export const MainNavigation = (): React.ReactElement => {
  return (
    <Suspense fallback={loadingComponent}>
      <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route path="/" element={<Testing />} />
            <Route path="testing2" element={<Testing2 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}



