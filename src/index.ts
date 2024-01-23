import type { Plugin } from 'vite';
import fsExtra from 'fs-extra';
import path from 'path';

interface KeepPluginOptions {
  src: string;
  dest: string;
}

export default function vitePluginKeep(options: KeepPluginOptions): Plugin {
  return {
    name: 'vite-plugin-keep',
    generateBundle() {
      const sourcePath = path.resolve(options.src);
      const destPath = path.resolve(options.dest);
      
      fsExtra.copySync(sourcePath, destPath, {
        overwrite: true,
        errorOnExist: false,
      });
    },
  };
}
