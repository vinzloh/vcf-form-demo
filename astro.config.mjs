import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercelServerless({
    functionPerRoute: false, // only works when false
  }),
  integrations: [react(), tailwind()],
  output: 'server',
  vite: {
    plugins: [
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          custom: FileSystemIconLoader('./public'),
        },
        iconCustomizer(collection, icon, props) {
          props.width = 30;
          props.height = '100%';
        },
      }),
    ],
  },
});
