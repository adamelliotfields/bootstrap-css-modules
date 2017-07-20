# Bootstrap CSS Modules
> Bootstrap 4 Alpha 6 as importable CSS Modules.

The original SCSS files have been changed to only emit camel-cased class names. This means you can edit and rebuild to create your own custom framework, and not worry about doing kebab-to-camel string manipulation after the fact.

Pre-compiled CSS is already provided, so building is only necessary if you'd like to customize the source and incorporate into your existing workflow.

## Modules
The modules are grouped by their category in the Bootstrap [docs](https://v4-alpha.getbootstrap.com/getting-started/introduction/). Here is a list of where to find the styles you're looking for:

### Layout
 - `/layout/grid.css`
 - `/layout/media.css`
 - `/layout/print.css`
 
### Content
*Note: Add `reboot.css` to your main entry file (i.e., `index.js`): `import 'bootstrap-css-modules/content/reboot.css'` or link it in your HTML and serve it as a static asset.*
 - `/content/reboot.css`
 - `/content/type.css`
 - `/content/code.css`
 - `/content/images.css`
 - `/content/tables.css`
 - *Figure classes are in `images.css`*

### Components
 - `/components/alert.css`
 - `/components/badge.css`
 - `/components/breadcrumb.css`
 - `/components/buttons.css`
 - `/components/buttonGroup.css`
 - `/components/card.css`
 - `/components/carousel.css`
 - `/components/dropdown.css`
 - `/components/forms.css`
 - `/components/inputGroup.css`
 - `/components/jumbotron.css`
 - `/components/listGroup.css`
 - `/components/modal.css`
 - `/components/nav.css`
 - `/components/navbar.css`
 - `/components/pagination.css`
 - `/components/popover.css`
 - `/components/progress.css`
 - `/components/tooltip.css`
 - `/components/transitions.css`
 - *Collapse classes are in `transitions.css`*
 - *Custom Form classes are in `customForms.css`*
 - *`.navItem` is in `nav.css`, NOT `navbar.css`*

### Utilities
 - `/utilities/align.css`
 - `/utilities/background.css`
 - `/utilities/borders.css`
 - `/utilities/clearfix.css`
 - `/utilities/close.css`
 - `/utilities/display.css`
 - `/utilities/flex.css`
 - `/utilities/float.css`
 - `/utilities/position.css`
 - `/utilities/responsiveEmbed.css`
 - `/utilities/screenreaders.css`
 - `/utilities/sizing.css`
 - `/utilities/spacing.css`
 - `/utilities/text.css`
 - `/utilities/visibility.css`
 - *Text colors and typography are in `text.css`*
 - *`.textHide` is also in `text.css`*
 - *`.invisible` is in `visibility.css`*
 - *Vertical alignment classes are in `align.css`*

## Installation
If you'd like to use the default Bootstrap styles, simply install from npm:

```bash
yarn add bootstrap-css-modules
```

To create a custom build, just copy the `_src` folder to your project:

```bash
cp -a node_modules/bootstrap-css-modules/_src/. src/scss
```

You could also copy the compiled stylesheets and edit them directly as they are not minified.

## Usage
You do NOT need to use a library like `classnames` or `react-css-modules`. Note the use of string template literals to combine class names.

The only requirement is that you're using Webpack's `css-loader` with `modules: true`. You can inject your styles into your `<head>` using `style-loader`, or create an external stylesheet with `extract-text-webpack-plugin`. See the examples folder for sample Webpack configs.

You'll also want to use PostCSS with Autoprefixer and CSSNano, as the compiled CSS has not been vendor prefixed or minified.

```javascript
import { container, row, col4 } from 'bootstrap-css-modules/layout/grid.css';
import { bgPrimary, bgFaded } from 'bootstrap-css-modules/utilities/background.css'

const App = () => (
  <div className={`${container} ${bgPrimary}`}>
    <div className={row}>
      <div className={col4}>
        <p>.col-4</p>
      </div>
      <div className={`${col4} ${bgFaded}`}>
        <p>.col-4</p>
      </div>
      <div className={col4}>
        <p>.col-4</p>
      </div>
    </div>
  </div>
);
```

## Composing (overwriting styles)
You'll need to provide the relative path to the CSS Module you want to compose from:

```css
.btnDodgerBlue {
  composes: btnPrimary from "../../node_modules/bootstrap-css-modules/components/buttons.css";
  background-color: dodgerblue;
  border-color: dodgerblue;
}
```

## Tree Shaking
Unfortunately, Webpack does not tree-shake CSS classes (yet). This means even if you `import { col4 }`, you'll get all columns.

There are open source solutions for this if it bothers you. Check out [dead-css-loader](https://github.com/simlrh/dead-css-loader) or [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack).

### Issues/Questions/Suggestions
If you run into a problem, or just need some help getting started with Webpack or CSS Modules, feel free to reach out to me directly (email is on my GitHub [profile](https://github.com/adamelliotfields)).
