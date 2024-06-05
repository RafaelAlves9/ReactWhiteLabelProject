import { lazy } from "react";

const CommonImports = {
  NotFound: lazy(() => import("../../pages/NotFound/NotFound")),
  NotAuth: lazy(() => import("../../pages/NotAuth/NotAuth")),
  Login: lazy(() => import("../../pages/Login/login.base")),
};

export { CommonImports };
