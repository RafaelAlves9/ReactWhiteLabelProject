import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { loadEnv } from 'vite';

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    base: "/",
    resolve: {
      alias: {
        "@utils": "/src/utils",
        "@axios": "/axios",
        "@gateway": "/business/application/Gateway",
        "@services": "/business/application/Services",
        "@interface": "/business/application/Interfaces",
        "@request": "/business/models/entities/request",
        "@response": "/business/models/entities/response",
        "@enums": "/business/models/enums",
        "@types": "/business/models/types",
        "@pages": "/src/pages",
        "@store": "/src/store",
        "@assets": "/src/assets",
        "@extensions": "/src/extensions",
        "@components": "/src/components",
        "@src": "/src"
      },
    },
    server: {
      port: 5173
    },
    define: {
      'process.env': process.env
    }
  });
};