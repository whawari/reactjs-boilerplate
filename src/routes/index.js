import { Suspense, lazy } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

import { LINKS } from "utils";

import { Loader } from "components";

const Homepage = lazy(() => import("pages/Homepage"));
const NotFound = lazy(() => import("pages/error/NotFound"));

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={LINKS.index} element={<Homepage />} />

        <Route path={LINKS.home} element={<Navigate to={LINKS.index} />} />

        <Route path={LINKS.notFound} element={<NotFound />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
