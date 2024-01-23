# vite-plugin-keep

`vite-plugin-keep` is a Vite plugin that allows you to specify a source directory to be copied into your build directory upon successful build completion. This is particularly useful for including assets or other files that need to be part of the output but are not directly imported in your source code.

## Features

- **Easy to Use**: Simply specify the source and destination directories.
- **Customizable**: Flexible source and destination paths.
- **Efficient**: Uses `fs-extra` for fast and reliable file copying.

## Installation

Install the plugin with npm:

```bash
npm install vite-plugin-keep --save-dev
```

Or with yarn:

```bash
yarn add vite-plugin-keep --dev
```

## Usage

To use `vite-plugin-keep`, import it into your Vite configuration file and add it to the plugins array. You need to specify the `src` and `dest` options.

For ES Module (ESM) syntax:

```javascript
// vite.config.js (ESM)
import vitePluginKeep from 'vite-plugin-keep';

export default {
  plugins: [
    vitePluginKeep({
      src: 'path/to/source', // Source directory to be copied
      dest: 'path/to/destination' // Destination directory in the build folder
    })
  ]
}
```

For CommonJS (CJS) syntax:

```javascript
// vite.config.js (CJS)
const vitePluginKeep = require('vite-plugin-keep');

module.exports = {
  plugins: [
    vitePluginKeep({
      src: 'path/to/source',
      dest: 'path/to/destination'
    })
  ]
}
```

## Options

The plugin accepts an options object with the following properties:

- **src**: (string) The path to the source directory that you want to keep.
- **dest**: (string) The path to the destination directory where the source directory will be copied. This path is relative to the project's build output directory.

## Example

If you have a directory named `static` in your project root that you want to copy to the `assets` directory in your build output, you would configure the plugin like this:

```javascript
vitePluginKeep({
  src: 'static',
  dest: 'assets'
})
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with any improvements or suggestions.

---

**Note:** This README assumes a standard MIT License and open contribution policy. You should replace these sections with your actual license and contribution guidelines.