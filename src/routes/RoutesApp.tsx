import { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Loading from "../components/loading/loading";
import AuthRequiredRoutes from "./AuthRequiredRoutes";
import { dataPathsImport } from "./DataPaths/import";

const RoutesApp = () => {
  
  return (
    <Router>
      <Suspense fallback={<Loading isLoading={true}/>}>
        <Routes>

          {/* public routes */}
          {dataPathsImport.publicRoutes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              element={<route.element />}
            />
          ))}

          {/* private routes */}
          {dataPathsImport.privateRoutes.map((route, key) => (
            <Route
              key={key}
              element={<AuthRequiredRoutes />}
            >
              <Route
                path={route.path}
                element={<route.element />}
              />
            </Route>
          ))}

        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesApp;
