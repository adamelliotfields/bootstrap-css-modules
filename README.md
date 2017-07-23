# Bootstrap CSS Modules
> A CSS Modules rebuild of Bootstrap 4.

This is a rebuild of Bootstrap's latest Alpha release, designed to be used with CSS Modules.

Some of the larger Sass files (grid, flex, spacing) have been broken up into smaller modules, so you don't have to import 30kb of code just for some extra margin-top.

Conversely, classes that depend on descendants being in the same scope have been merged together (e.g., `.btnGroup` requires `.btn`).

The original source has been modified to only emit camel-cased class names. This means you can edit variables and rebuild to create your own custom framework, and not worry about doing kebab-to-camel string manipulation after the fact.

Pre-compiled CSS is already provided, so building is only necessary if you'd like to customize the source and incorporate into your existing workflow.

Read about [CSS Modules](https://github.com/css-modules/css-modules) and Webpack's [CSS Loader](https://github.com/webpack-contrib/css-loader) if you're not already familiar with them.

Live demo using this package [here](https://adamelliotfields.github.io/bootstrap-css-modules/).

## Installation
If you'd like to use the default Bootstrap styles, simply install from npm:

```bash
yarn add bootstrap-css-modules
```

To create a custom build, just copy the `_src` folder to your project:

```bash
cp -a node_modules/bootstrap-css-modules/scss/. your-project/scss
```

Check out the `package.json` for all the scripts to compile into individual files using `node-sass`.

You could also copy the compiled stylesheets and edit them directly as they are not minified.

## Usage
You do NOT need to use a library like `classnames` or `react-css-modules`. Note the use of string template literals to combine class names.

The only requirement is that you're using Webpack's `css-loader` with `modules: true`. You can inject your styles into your `<head>` using `style-loader`, or create an external stylesheet with `extract-text-webpack-plugin`. See the demo folder for sample Webpack configs.

You'll also want to use PostCSS with Autoprefixer and CSSNano, as the compiled CSS has not been vendor prefixed or minified.

```javascript
import React from 'react';

import { container } from 'bootstrap-css-modules/css/container.css';
import { row } from 'bootstrap-css-modules/css/row.css';
import { col12, colSm10 } from 'bootstrap-css-modules/css/columns.css';
import { display4, lead } from 'bootstrap-css-modules/css/type.css';
import { justifyContentCenter } from 'bootstrap-css-modules/css/justify.css';
import { textCenter } from 'bootstrap-css-modules/css/text.css';
import { mt5 } from 'bootstrap-css-modules/css/marginTop.css';

const Heading = ({text}) => (
  <h1 className={display4}>{text}</h1>
);

const Subtitle = ({text}) => (
  <p className={lead}>{text}</p>
);

const Home = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <Heading text='Welcome' />
        <Subtitle text='This is the home page.' />
      </div>
    </div>
  </div>
);
```

## Composing (overwriting styles)

```css
.btnDodgerBlue {
  composes: btnPrimary from "bootstrap-css-modules/css/buttons.css";
  background-color: dodgerblue;
  border-color: dodgerblue;
}
```

Note that composing a class from an external stylesheet will import the entire stylesheet. In this example, `buttons.css` will be added to our bundle and the `btnPrimary` AND `btnDodgerBlue` classes will be applied to our button. `btnDodgerBlue` will appear after the default button styles in the bundle in order to override them.

Composing is also useful for combining existing classes into a custom class. This makes your JSX cleaner:

```css
.navbarCustom {
  composes: navbar navbarInverse navbarToggleableXl from "bootstrap-css-modules/css/navbar.css";
  composes: bgInverse from "bootstrap-css-modules/css/background.css";
  box-shadow: 0 8px 6px -6px black;
}
```

```javascript
<nav className={navbarCustom}>
 ...
</nav>
```

## Tree Shaking
Unfortunately, Webpack does not tree-shake CSS classes (yet). This means even if you `import { col4 }`, you'll get all columns in your bundle.

The good news is that each module is only bundled once. If you import `columns.css` in every component, it's analogous to importing `react` in every component.

There are open source solutions for this if it bothers you. Check out [dead-css-loader](https://github.com/simlrh/dead-css-loader) or [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack).

## Code Splitting
If you inject your CSS using `style-loader`, you can take advantage of code splitting your JavaScript and CSS. The styles for your dynamically loaded components will be injected when their script is downloaded and executed. Check out [React Router](https://reacttraining.com/react-router/web/guides/philosophy) to see this in action.

If you extract your CSS using `extract-text-webpack-plugin`, all of your styles will be bundled into a single `main.css` file. Make sure you set `allChunks: true` and `ignoreOrder: true`.

In the demo folder, I have the dev config set up to use `style-loader`, and the production config set up to use `extract-text-webpack-plugin`.

## Modules
The modules are grouped by their category in the Bootstrap [docs](https://v4-alpha.getbootstrap.com/getting-started/introduction/). Here is a list of where to find the styles you're looking for.

`#{$infix}` is the responsive breakpoint - Sm, Md, Lg, Xl (or none)  
`#{$size}` is the width - 1...12

File sizes are before minification and rounded to the nearest kilobyte.

### Layout
Layout styles include everything you need to build a responsive grid, at around the same size as `skeleton-css`.

**Container** - `/css/container.css` - 2kb
 - `.container`
 - `.containerFluid`

**Row** - `/css/row.css` - 1kb
 - `.row`
 - `.noGutters`

**Columns** - `/css/columns.css` - 8kb
 - `.col#{#infix}#{size}`

**Pull** - `/css/pull.css` - 3kb
 - `.pull#{#infix}#{size}`

**Push** - `/css/push.css` - 2kb
 - `.push#{#infix}#{size}`

**Offset** - `/css/offset.css` - 3kb
 - `.offset#{#infix}#{size}`

**Media** - `/css/media.css` - 1kb
 - `.media`
 - `.mediaBody`

### Content
The `reboot.css` styles include a copy of Normalize.css as well as additional overrides to make everything display properly. I've also added additional typography, code, and print styles normally found when using `bootstrap.css` globally.

Import it directly in your main entry file, or link to it in your `index.html`.

**Reboot** - `/css/reboot.css` - 8kb

**Typography** - `/css/type.css` - 2kb
 - `.h1`, `.h2`, `.h3`, `.h4`, `.h5`, `.h6`
 - `.lead`
 - `.display1`, `.display2`, `.display3`, `.display4`
 - `.small`
 - `.mark`
 - `.listUnstyled`
 - `.listInline`
 - `.listInlineItem`
 - `.initialism`
 - `.blockquote`
 - `.blockquoteFooter`
 - `.blockquoteReverse`
 
**Code** - `/css/code.css` - 1kb
 - `.preScrollable`

**Images** - `/css/images.css` - 1kb
 - `.imgFluid`
 - `.imgThumbnail`
 - `.figure`
 - `.figureImg`
 - `.figureCaption`

**Tables** - `/css/tables.css` - 3kb
 - `.table`
 - `.tableSm`
 - `.tableBordered`
 - `.tableStriped`
 - `.tableHover`
 - `.tableActive`
 - `.tableSuccess`
 - `.tableInfo`
 - `.tableWarning`
 - `.tableDanger`
 - `.theadInverse`
 - `.theadDefault`
 - `.tableInverse`
 - `.tableResponsive`

### Components
Import `components.css` if you're planning on including components within other components. They won't display properly if they are not in the same scope. For example, you could have a split-button with a dropdown (which could be inside a navbar), or a list group inside a card.

If you just want the pure components, feel free to import them directly instead. However, if you do import `components.css`, be sure to use it throughout your app to avoid bundling duplicate styles (i.e., don't import `components.css` in one component and `buttons.css` in another).

Notes:
 - Buttons includes Button Group, as the latter cannot work without buttons.
 - Forms includes Input Group, as they both form a circular dependency.
 - Use `.alertClose` within an `.alertDismissible` to create a dismissible alert.
 - Use `.modalClose` within a modal to create a close icon.
 - Use `.navbarContainer` to wrap your navbar content in a container.
 - Use `.navbarLink` for your navbar links.
 - Use `.listGroupItemSmall` instead of `.small` inside a list group.
 - Use `.cardBlockquoteFooter` instead of `.blockquoteFooter` inside a card.

**Components** - `/css/components.css` - 66kb

**Alerts** - `/css/alert.css` - 2kb
 - `.alert`
 - `.alertHeading`
 - `.alertLink`
 - `.alertDismissible`
 - `.alertClose`
 - `.alertSuccess`
 - `.alertInfo`
 - `.alertWarning`
 - `.alertDanger`

**Badge** - `/css/badge.css` - 2kb
 - `.badge`
 - `.badgePill`
 - `.badgeDefault`
 - `.badgePrimary`
 - `.badgeSuccess`
 - `.badgeInfo`
 - `.badgeWarning`
 - `.badgeDanger`

**Breadcrumb** - `/css/breadcrumb.css` - 1kb
 - `.breadcrumb`
 - `.breadcrumbItem`
 - `.active`

**Buttons** - `/css/buttons.css` - 11kb
 - `.btn`
 - `.btnPrimary`
 - `.btnSecondary`
 - `.btnInfo`
 - `.btnSuccess`
 - `.btnWarning`
 - `.btnDanger`
 - `.btnOutlinePrimary`
 - `.btnOutlineSecondary`
 - `.btnOutlineInfo`
 - `.btnOutlineSuccess`
 - `.btnOutlineWarning`
 - `.btnOutlineDanger`
 - `.btnLink`
 - `.btnLg`
 - `.btnSm`
 - `.btnBlock`
 - `.btnGroup`
 - `.btnGroupSm`
 - `.btnGroupLg`
 - `.btnGroupVertical`
 - `.btnToolbar`
 - `.focus`
 - `.active`
 - `.disabled`

**Card** - `/css/card.css` - 5kb
 - `.card`
 - `.cardBlock`
 - `.cardTitle`
 - `.cardSubtitle`
 - `.cardText`
 - `.cardLink`
 - `.cardHeader`
 - `.cardHeaderTabs`
 - `.cardHeaderPills`
 - `.cardPrimary`
 - `.cardSuccess`
 - `.cardInfo`
 - `.cardWarning`
 - `.cardDanger`
 - `.cardOutlinePrimary`
 - `.cardOutlineSecondary`
 - `.cardOutlineInfo`
 - `.cardOutlineSuccess`
 - `.cardOutlineWarning`
 - `.cardOutlineDanger`
 - `.cardInverse`
 - `.cardBlockquote`
 - `.cardBlockquoteFooter`
 - `.cardImg`
 - `.cardImgOverlay`
 - `.cardImgTop`
 - `.cardImgBottom`
 - `.cardDeck`
 - `.cardGroup`
 - `.cardColumns`

**Carousel** - `/components/carousel.css` - 4kb
 - `.carousel`
 - `.carouselInner`
 - `.carouselItem`
 - `.carouselItemNext`
 - `.carouselItemPrev`
 - `.carouselItemLeft`
 - `.carouselItemRight`
 - `.carouselControlPrev`
 - `.carouselControlNext`
 - `.carouselControlPrevIcon`
 - `.carouselControlNextIcon`
 - `.carouselIndicators`
 - `.carouselCaption`
 - `.active`

**Close** - `/components/close.css` - 1kb
 - `.close`

**Custom Forms** - `/css/customForms.css` - 5kb
 - `.customControl`
 - `.customControlInput`
 - `.customControlIndicator`
 - `.customControlDescription`
 - `.customControlsStacked`
 - `.customCheckbox`
 - `.customRadio`
 - `.customSelect`
 - `.customSelectSm`
 - `.customFile`
 - `.customFileInput`
 - `.customFileControl`

**Dropdown** - `/css/dropdown.css` - 2kb
 - `.dropup`
 - `.dropdown`
 - `.dropdownToggle`
 - `.dropdownToggleSplit`
 - `.dropdownDivider`
 - `.dropdownItem`
 - `.dropdownMenu`
 - `.dropdownMenuRight`
 - `.dropdownMenuLeft`
 - `.dropdownHeader`
 - `.dropdownBackdrop`
 - `.show`
 - `.active`
 - `.disabled`

**Forms** - `/css/forms.css` - 9kb
 - `.formControl`
 - `.formControlFile`
 - `.formControlRange`
 - `.formControlStatic`
 - `.formControlSm`
 - `.formControlLg`
 - `.formControlLabel`
 - `.formControlFeedback`
 - `.formControlSuccess`
 - `.formControlWarning`
 - `.formControlDanger`
 - `.colFormLabel`
 - `.colFormLabelLg`
 - `.colFormLabelSm`
 - `.colFormLegend`
 - `.formGroup`
 - `.formText`
 - `.formCheck`
 - `.formCheckLabel`
 - `.formInline`
 - `.formCheckLabel`
 - `.formCheckInput`
 - `.formCheckInline`
 - `.hasSuccess`
 - `.hasWarning`
 - `.hasDanger`
 - `.inputGroup`
 - `.inputGroupSm`
 - `.inputGroupLg`
 - `.inputGroupAddon`
 - `.inputGroupBtn`
 - `.disabled`

**Jumbotron** - `/css/jumbotron.css` - 1kb
 - `.jumbotron`
 - `.jumbotronHr`
 - `.jumbotronFluid`

**List Group** - `/css/listGroup.css` - 5kb
 - `.listGroup`
 - `.listGroupItem`
 - `.listGroupItemAction`
 - `.listGroupItemHeading`
 - `.listGroupItemSmall`
 - `.listGroupItemText`
 - `.listGroupItemSuccess`
 - `.listGroupItemInfo`
 - `.listGroupItemWarning`
 - `.listGroupItemDanger`
 - `.listGroupFlush`
 - `.active`
 - `.disabled`

**Modal** - `/css/modal.css` - 3kb
 - `.modal`
 - `.modalOpen`
 - `.modalClose`
 - `.modalDialog`
 - `.modalContent`
 - `.modalBackdrop`
 - `.modalHeader`
 - `.modalTitle`
 - `.modalBody`
 - `.modalFooter`
 - `.modalScrollbarMeasure`
 - `.modalSm`
 - `.modalLg`
 - `.show`
 - `.fade`

**Nav** - `/css/nav.css` - 2kb
 - `.nav`
 - `.navLink`
 - `.navItem`
 - `.navTabs`
 - `.navPills`
 - `.navFill`
 - `.navJustified`
 - `.tabContent`
 - `.tabPane`
 - `.show`
 - `.active`
 - `.disabled`
 
**Navbar** - `/css/navbar.css` - 8kb
 - `.navbar`
 - `.navbarContainer`
 - `.navbarBrand`
 - `.navbarLink`
 - `.navbarNav`
 - `.navbarText`
 - `.navbarToggler`
 - `.navbarTogglerIcon`
 - `.navbarTogglerLeft`
 - `.navbarTogglerRight`
 - `.navbarToggleable#{$infix}`
 - `.navbarLight`
 - `.navbarInverse`
 - `.open`
 - `.active`
 - `.disabled`

**Pagination** - `/css/pagination.css` - 2kb
 - `.pagination`
 - `.pageItem`
 - `.pageLink`
 - `.paginationLg`
 - `.paginationSm`

**Popover** - `/css/popover.css` - 4kb
 - `.popover`
 - `.popoverTop`
 - `.popoverBottom`
 - `.popoverLeft`
 - `.popoverRight`
 - `.popoverTitle`
 - `.popoverContent`
 - `.bsTetherElementAttachedTop`
 - `.bsTetherElementAttachedBottom`
 - `.bsTetherElementAttachedLeft`
 - `.bsTetherElementAttachedRight`

**Progress** - `/css/progress.css` - 1kb
 - `.progress`
 - `.progressBar`
 - `.progressBarStriped`
 - `.progressBarAnimated`

**Tooltip** - `/css/tooltip.css` - 3kb
 - `.tooltip`
 - `.tooltipTop`
 - `.tooltipBottom`
 - `.tooltipInner`
 - `.tooltipRight`
 - `.tooltipLeft`
 - `.bsTetherElementAttachedTop`
 - `.bsTetherElementAttachedBottom`
 - `.bsTetherElementAttachedLeft`
 - `.bsTetherElementAttachedRight`
 - `.show`

**Transitions** - `/css/transitions.css` - 1kb
 - `.show`
 - `.fade`
 - `.collapse`
 - `.collapsing`

### Utilities
Utilities provide helper classes for colors, flexbox, floats, display properties, positioning, sizing, spacing, typography, and more.

**Alignment** - `/css/align.css` - 6kb
 - `.alignBaseline`
 - `.alignTop`
 - `.alignMiddle`
 - `.alignBottom`
 - `.alignTextBottom`
 - `.alignTextTop`
 - `.alignItems#{$infix}Start`
 - `.alignItems#{$infix}End`
 - `.alignItems#{$infix}Center`
 - `.alignItems#{$infix}Baseline`
 - `.alignItems#{$infix}Stretch`
 - `.alignContent#{$infix}Start`
 - `.alignContent#{$infix}End`
 - `.alignContent#{$infix}Center`
 - `.alignContent#{$infix}Between`
 - `.alignContent#{$infix}Around`
 - `.alignContent#{$infix}Stretch`
 - `.alignSelf#{$infix}Auto`
 - `.alignSelf#{$infix}Start`
 - `.alignSelf#{$infix}End`
 - `.alignSelf#{$infix}Center`
 - `.alignSelf#{$infix}Baseline`
 - `.alignSelf#{$infix}Stretch`

**Background Colors** - `/css/background.css` - 1kb
 - `.bgFaded`
 - `.bgPrimary`
 - `.bgSuccess`
 - `.bgInfo`
 - `.bgWarning`
 - `.bgDanger`
 - `.bgInverse`
 
**Borders** - `/css/borders.css` - 1kb
 - `.border0`
 - `.borderTop0`
 - `.borderBottom0`
 - `.borderLeft0`
 - `.borderRight0`
 - `.rounded`
 - `.roundedTop`
 - `.roundedBottom`
 - `.roundedLeft`
 - `.roundedRight`
 - `.roundedCircle`
 - `.rounded0`
 
**Clearfix** - `/css/clearfix.css` - 1kb
 - `.clearfix`

**Display Properties** - `/css/display.css` - 3kb
 - `.d#{$infix}None`
 - `.d#{$infix}Inline`
 - `.d#{$infix}InlineBlock`
 - `.d#{$infix}Block`
 - `.d#{$infix}Table`
 - `.d#{$infix}TableCell`
 - `.d#{$infix}Flex`
 - `.d#{$infix}InlineFlex`

**Flexbox** - `/css/flex.css` - 3kb
 - `.flex#{$infix}First`
 - `.flex#{$infix}Last`
 - `.flex#{$infix}Unordered`
 - `.flex#{$infix}Row`
 - `.flex#{$infix}Column`
 - `.flex#{$infix}RowReverse`
 - `.flex#{$infix}ColumnReverse`
 - `.flex#{$infix}Wrap`
 - `.flex#{$infix}Nowrap`
 - `.flex#{$infix}WrapReverse`

**Float** - `/css/float.css` - 1kb
 - `.float#{$infix}Left`
 - `.float#{$infix}Right`
 - `.float#{$infix}None`

**Justification** - `/css/justify.css` - 2kb
 - `.justifyContent#{$infix}Start`
 - `.justifyContent#{$infix}End`
 - `.justifyContent#{$infix}Center`
 - `.justifyContent#{$infix}Between`
 - `.justifyContent#{$infix}Around`
 
**Margin** - `/css/margin.css` - 2kb
 - `.m#{$infix}0`
 - `.m#{$infix}1`
 - `.m#{$infix}2`
 - `.m#{$infix}3`
 - `.m#{$infix}4`
 - `.m#{$infix}5`
 - `.m#{$infix}Auto`
 
**Margin Top** - `/css/marginTop.css` - 2kb
 - `.mt#{$infix}0`
 - `.mt#{$infix}1`
 - `.mt#{$infix}2`
 - `.mt#{$infix}3`
 - `.mt#{$infix}4`
 - `.mt#{$infix}5`
 - `.mt#{$infix}Auto`

**Margin Right** - `/css/marginRight.css` - 2kb
 - `.mr#{$infix}0`
 - `.mr#{$infix}1`
 - `.mr#{$infix}2`
 - `.mr#{$infix}3`
 - `.mr#{$infix}4`
 - `.mr#{$infix}5`
 - `.mr#{$infix}Auto`
 
**Margin Bottom** - `/css/marginBottom.css` - 2kb
 - `.mb#{$infix}0`
 - `.mb#{$infix}1`
 - `.mb#{$infix}2`
 - `.mb#{$infix}3`
 - `.mb#{$infix}4`
 - `.mb#{$infix}5`
 - `.mb#{$infix}Auto`
 
**Margin Left** - `/css/marginLeft.css` - 2kb
 - `.ml#{$infix}0`
 - `.ml#{$infix}1`
 - `.ml#{$infix}2`
 - `.ml#{$infix}3`
 - `.ml#{$infix}4`
 - `.ml#{$infix}5`
 - `.ml#{$infix}Auto`
 
**Margin Left/Right** - `/css/marginX.css` - 3kb
 - `.mx#{$infix}0`
 - `.mx#{$infix}1`
 - `.mx#{$infix}2`
 - `.mx#{$infix}3`
 - `.mx#{$infix}4`
 - `.mx#{$infix}5`
 - `.mx#{$infix}Auto`
 
**Margin Top/Bottom** - `/css/marginY.css` - 3kb
 - `.my#{$infix}0`
 - `.my#{$infix}1`
 - `.my#{$infix}2`
 - `.my#{$infix}3`
 - `.my#{$infix}4`
 - `.my#{$infix}5`
 - `.my#{$infix}Auto`
 
**Padding** - `/css/padding.css` - 2kb
 - `.p#{$infix}0`
 - `.p#{$infix}1`
 - `.p#{$infix}2`
 - `.p#{$infix}3`
 - `.p#{$infix}4`
 - `.p#{$infix}5`

**Padding Top** - `/css/paddingTop.css` - 2kb
 - `.pt#{$infix}0`
 - `.pt#{$infix}1`
 - `.pt#{$infix}2`
 - `.pt#{$infix}3`
 - `.pt#{$infix}4`
 - `.pt#{$infix}5`

**Padding Right** - `/css/paddingRight.css` - 2kb
 - `.pr#{$infix}0`
 - `.pr#{$infix}1`
 - `.pr#{$infix}2`
 - `.pr#{$infix}3`
 - `.pr#{$infix}4`
 - `.pr#{$infix}5`

**Padding Bottom** - `/css/paddingBottom.css` - 2kb
 - `.pb#{$infix}0`
 - `.pb#{$infix}1`
 - `.pb#{$infix}2`
 - `.pb#{$infix}3`
 - `.pb#{$infix}4`
 - `.pb#{$infix}5`

**Padding Left** - `/css/paddingLeft.css` - 2kb
 - `.pl#{$infix}0`
 - `.pl#{$infix}1`
 - `.pl#{$infix}2`
 - `.pl#{$infix}3`
 - `.pl#{$infix}4`
 - `.pl#{$infix}5`

**Padding Left/Right** - `/css/paddingX.css` - 3kb
 - `.px#{$infix}0`
 - `.px#{$infix}1`
 - `.px#{$infix}2`
 - `.px#{$infix}3`
 - `.px#{$infix}4`
 - `.px#{$infix}5`
 
**Padding Top/Bottom** - `/css/paddingY.css` - 3kb
 - `.py#{$infix}0`
 - `.py#{$infix}1`
 - `.py#{$infix}2`
 - `.py#{$infix}3`
 - `.py#{$infix}4`
 - `.py#{$infix}5`

**Positioning** - `/css/position.css` - 1kb
 - `.fixedTop`
 - `.fixedBottom`
 - `.stickyTop`

**Responsive Embeds** - `/css/responsiveEmbed.css` - 1kb
 - `.embedResponsive`
 - `.embedResponsiveItem`
 - `.embedResponsive21By9`
 - `.embedResponsive16By9`
 - `.embedResponsive4By3`
 - `.embedResponsive1By1`
 
**Screenreaders** - `/css/screenreaders.css` - 1kb
 - `.srOnly`
 - `.srOnlyFocusable`
 
**Sizing** - `/css/sizing.css` - 1kb
 - `.w25`, `.w50`, `.w75`, `.w100`
 - `.h25`, `.h50`, `.h75`, `.h100`
 - `.mh100`
 - `.mw100`

**Text** - `/css/text.css` - 3kb
 - `.textJustify`
 - `.textNowrap`
 - `.textTruncate`
 - `.textLowercase`
 - `.textUppercase`
 - `.textCapitalize`
 - `.fontWeightNormal`
 - `.fontWeightBold`
 - `.fontItalic`
 - `.textWhite`
 - `.textMuted`
 - `.textPrimary`
 - `.textSuccess`
 - `.textInfo`
 - `.textWarning`
 - `.textDanger`
 - `.textGrayDark`
 - `.textHide`
 - `.text#{$infix}Left`
 - `.text#{$infix}Right`
 - `.text#{$infix}Center`
 
**Visibility** - `/css/visibility.css` - 2kb
 - `.invisible`
 - `.visiblePrintBlock`
 - `.visiblePrintInline`
 - `.visiblePrintInlineBlock`
 - `.hiddenPrint`
 - `.hiddenXsUp`
 - `.hiddenXsDown`
 - `.hidden#{$infix}Up`
 - `.hidden#{$infix}Down`

## Issues/Questions/Suggestions
If you run into a problem, or just need some help getting started with Webpack or CSS Modules, feel free to reach out to me directly (email is on my GitHub [profile](https://github.com/adamelliotfields)).
