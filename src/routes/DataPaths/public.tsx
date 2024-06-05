import { CommonImports } from "../LazyImports/public";
import { TRoutePath } from "./private";

export const publicRoutes: TRoutePath[] = [
  {
    path: "*",
    element: CommonImports.NotFound
  },
  {
    path: "/not-found",
    element: CommonImports.NotFound
  },
  {
    path: "/not-authenticated",
    element: CommonImports.NotAuth
  },
  {
    path: "/login",
    element: CommonImports.Login
  }
];
