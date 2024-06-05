import { LazyExoticComponent } from "react";
import { LazyImports } from "../LazyImports/private";
import { ERoles } from "@enums/ERoles";

export type TRoutePath = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  authorizedRoles?: ERoles[];
};

export const privateRoutes: TRoutePath[] = [
  {
    path: "/",
    element: LazyImports.Home,
    authorizedRoles: [ERoles.Administrator],
  },
  {
    path: "/home",
    element: LazyImports.Home,
    authorizedRoles: [ERoles.Administrator],
  }
];
