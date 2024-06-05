import { lazy } from "react";

const LazyImports = {
  Home: lazy(() => import("../../pages/Home/Home")),
};

export { LazyImports };
