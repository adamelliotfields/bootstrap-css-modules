# Bootstrap CSS Modules
> Bootstrap 4 Alpha 6 as importable CSS Modules.

The original SCSS files have been changed to only emit camel-cased class names. This means you can edit and rebuild to create your own custom framework, and not worry about doing kebab-to-camel string manipulation after the fact.

Pre-compiled CSS is already provided, so building is only necessary if you'd like to customize the source and incorporate into your existing workflow.

## Modules
The modules are grouped by their category in the Bootstrap [docs](https://v4-alpha.getbootstrap.com/getting-started/introduction/). Here is a list of where to find the styles you're looking for.

The wildcard character denotes a responsive breakpoint - Sm, Md, Lg, Xl (e.g., `dSmNone`, `colMd4`, or `mtLg3`).

All necessary sibling/descendant selectors are included, but omitted from the list for the sake of brevity.

### Layout
 - `/layout/grid.css` - 17kb
   - container
   - containerFluid
   - row
   - noGutters
   - col*
   - pull*
   - push*
   - offset*
 - `/layout/media.css` - 1kb
   - media
   - mediaBody
 - `/layout/print.css` - 1kb
 
### Content
*Note: Add `reboot.css` to your main entry file (i.e., `index.js`): `import 'bootstrap-css-modules/content/reboot.css'` or link it in your HTML and serve it as a static asset.*
 - `/content/type.css` - 2kb
   - h1, h2, h3, h4, h5, h6
   - lead
   - display1, display2, display3, display4
   - small
   - mark
   - listUnstyled
   - listInline
   - listInlineItem
   - initialism
   - blockquote
   - blockquoteFooter
   - blockquoteReverse
 - `/content/code.css` - 1kb
   - preScrollable
 - `/content/images.css` - 1kb
   - imgFluid
   - imgThumbnail
   - figure
   - figureImg
   - figureCaption
 - `/content/tables.css` - 3kb
   - table
   - tableSm
   - tableBordered
   - tableStriped
   - tableHover
   - tableActive
   - tableSuccess
   - tableInfo
   - tableWarning
   - tableDanger
   - theadInverse
   - theadDefault
   - tableInverse
   - tableResponsive
 - `/content/reboot.css` - 6kb

### Components
 - `/components/alert.css` - 2kb
   - alert
   - alertHeading
   - alertLink
   - alertDismissible
   - alertSuccess
   - alertInfo
   - alertWarning
   - alertDanger
 - `/components/badge.css` - 2kb
   - badge
   - badgePill
   - badgeDefault
   - badgePrimary
   - badgeSuccess
   - badgeInfo
   - badgeWarning
   - badgeDanger
 - `/components/breadcrumb.css` - 1kb
   - breadcrumb
   - breadcrumbItem
 - `/components/buttons.css` - 9kb
   - fade
   - show
   - collapse
   - collapsing
   - btn
   - btnPrimary
   - btnSecondary
   - btnInfo
   - btnSuccess
   - btnWarning
   - btnDanger
   - btnOutlinePrimary
   - btnOutlineSecondary
   - btnOutlineInfo
   - btnOutlineSuccess
   - btnOutlineWarning
   - btnOutlineDanger
   - btnLink
   - btnLg
   - btnSm
   - btnBlock
 - `/components/buttonGroup.css` - 4kb
   - btnGroup
   - btnGroupVertical
   - btnToolbar
 - `/components/card.css` - 5kb
   - card
   - cardBlock
   - cardTitle
   - cardSubtitle
   - cardText
   - cardLink
   - cardHeader
   - cardHeaderTabs
   - cardHeaderPills
   - cardPrimary
   - cardSuccess
   - cardInfo
   - cardWarning
   - cardDanger
   - cardOutlinePrimary
   - cardOutlineSecondary
   - cardOutlineInfo
   - cardOutlineSuccess
   - cardOutlineWarning
   - cardOutlineDanger
   - cardInverse
   - cardBlockquote
   - cardImg
   - cardImgOverlay
   - cardImgTop
   - cardImgBottom
   - cardDeck
   - cardGroup
   - cardColumns
 - `/components/carousel.css` - 4kb
   - carousel
   - carouselInner
   - carouselItem
   - carouselItemNext
   - carouselItemPrev
   - carouselControlPrev
   - carouselControlNext
   - carouselControlPrevIcon
   - carouselControlNextIcon
   - carouselIndicators
   - carouselCaption
 - `/components/customForms.css` - 5kb
   - customControl
   - customControlInput
   - customControlIndicator
   - customControlStacked
   - customCheckbox
   - customRadio
   - customSelect
   - customSelectSm
   - customFile
   - customFileInput
   - customFileControl
 - `/components/dropdown.css` - 2kb
   - show
   - dropup
   - dropdown
   - dropdownToggle
   - dropdownDivider
   - dropdownItem
   - dropdownMenu
   - dropdownMenuRight
   - dropdownMenuLeft
   - dropdownHeader
   - dropdownBackdrop
 - `/components/forms.css` - 7kb
   - formControl
   - formControlFile
   - formControlRange
   - colFormLabel
   - colFormLabelLg
   - colFormLabelSm
   - colFormLegend
   - formControlStatic
   - formControlSm
   - formControlLg
   - formGroup
   - formText
   - formCheck
   - formCheckLabel
   - formCheckInput
   - formCheckInline
   - formControlFeedback
   - formControlSuccess
   - formControlWarning
   - formControlDanger
   - formInline
   - hasSuccess
   - hasWarning
   - hasDanger
 - `/components/inputGroup.css` - 4kb
   - inputGroup
   - inputGroupAddon
   - inputGroupBtn
 - `/components/jumbotron.css` - 1kb
   - jumbotron
   - jumbotronHr
   - jumbotronFluid
 - `/components/listGroup.css` - 5kb
   - listGroup
   - listGroupItemAction
   - listGroupItem
   - listGroupFlush
   - listGroupItemSuccess
   - listGroupItemInfo
   - listGroupItemWarning
   - listGroupItemDanger
 - `/components/modal.css` - 2kb
   - modal
   - modalOpen
   - modalDialog
   - modalContent
   - modalBackdrop
   - modalHeader
   - modalTitle
   - modalBody
   - modalFooter
   - modalScrollbarMeasure
   - modalSm
   - modalLg
 - `/components/nav.css` - 2kb
   - nav
   - navLink
   - navTabs
   - navPills
   - navFill
   - navJustified
   - tabContent
 - `/components/navbar.css` - 8kb
   - navbar
   - navbarBrand
   - navbarNav
   - navbarText
   - navbarToggler
   - navbarTogglerIcon
   - navbarTogglerLeft
   - navbarTogglerRight
   - navbarToggleable
   - navbarToggleableSm
   - navbarToggleableMd
   - navbarToggleableLg
   - navbarToggleableXl
   - navbarLight
   - navbarInverse
 - `/components/pagination.css` - 2kb
   - pagination
   - pageItem
   - pageLink
   - paginationLg
   - paginationSm
 - `/components/popover.css` - 4kb
   - popover
   - popoverTop
   - popoverBottom
   - popoverLeft
   - popoverRight
   - popoverTitle
   - popoverContent
   - bsTetherElementAttachedTop
   - bsTetherElementAttachedBottom
   - bsTetherElementAttachedLeft
   - bsTetherElementAttachedRight
 - `/components/progress.css` - 1kb
   - progress
   - progressBar
   - progressBarStriped
   - progressBarAnimated
 - `/components/tooltip.css` - 3kb
   - tooltip
   - tooltipTop
   - tooltipBottom
   - tooltipInner
   - tooltipRight
   - tooltipLeft
   - bsTetherElementAttachedTop
   - bsTetherElementAttachedBottom
   - bsTetherElementAttachedLeft
   - bsTetherElementAttachedRight
 - `/components/transitions.css` - 1kb
   - fade
   - show
   - collapse
   - collapsing

### Utilities
 - `/utilities/align.css` - 1kb
   - alignBaseline
   - alignTop
   - alignMiddle
   - alignBottom
   - alignTextBottom
   - alignTextTop
 - `/utilities/background.css` - 1kb
   - bgFaded
   - bgPrimary
   - bgSuccess
   - bgInfo
   - bgWarning
   - bgDanger
   - bgInverse
 - `/utilities/borders.css` - 1kb
   - border0
   - borderTop0
   - borderBottom0
   - borderLeft0
   - borderRight0
   - rounded
   - roundedTop
   - roundedBottom
   - roundedLeft
   - roundedRight
   - roundedCircle
   - rounded0
 - `/utilities/clearfix.css` - 1kb
   - clearfix
 - `/utilities/close.css` - 1kb
   - close
 - `/utilities/display.css` - 3kb
   - dNone
   - dInline
   - dInlineBlock
   - dBlock
   - dTable
   - dTableCell
   - dFlex
   - dInlineFlex
   - d*None
   - d*Inline
   - d*InlineBlock
   - d*Block
   - d*Table
   - d*TableCell
   - d*Flex
   - d*InlineFlex
 - `/utilities/flex.css`
 - `/utilities/float.css`
 - `/utilities/position.css`
 - `/utilities/responsiveEmbed.css`
 - `/utilities/screenreaders.css`
 - `/utilities/sizing.css`
 - `/utilities/spacing.css`
 - `/utilities/text.css`
 - `/utilities/visibility.css`

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
import React from 'react';

import { container, row, col12, colSm10 } from 'bootstrap-css-modules/layout/grid.css';
import { justifyContentCenter } from 'bootstrap-css-modules/utilities/flex.css';
import { textCenter } from 'bootstrap-css-modules/utilities/text.css';
import { display4, lead } from 'bootstrap-css-modules/content/type.css';
import { mt5 } from 'bootstrap-css-modules/utilities/spacing.css';

const Home = () => (
  <div className={`${container} ${mt5}`}>
    <div className={`${row} ${justifyContentCenter}`}>
      <div className={`${col12} ${colSm10} ${textCenter}`}>
        <h1 className={display4}>Welcome</h1>
        <p className={lead}>This is the home page.</p>
      </div>
    </div>
  </div>
);

export default Home;
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

Note that composing a class from an external stylesheet will import the entire stylesheet. In this example, `buttons.css` will be added to our bundle and the `btnPrimary` AND `btnDodgerBlue` classes will be applied to our button. `btnDodgerBlue` will appear after the default button styles in the bundle in order to override them.

Composing is also useful for combining existing classes into a custom class. This makes your JSX cleaner:

```css
.navbarCustom {
  composes: navbar navbarInverse navbarToggleableXl from '../../node_modules/components/navbar.css';
  composes: bgInverse from '../../node_modules/utilities/background.css';
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

The good news is that each module is only bundled once. If you import `grid.css` in every component, it's analogous to importing `react` in every component.

There are open source solutions for this if it bothers you. Check out [dead-css-loader](https://github.com/simlrh/dead-css-loader) or [purifycss-webpack](https://github.com/webpack-contrib/purifycss-webpack).

## Issues/Questions/Suggestions
If you run into a problem, or just need some help getting started with Webpack or CSS Modules, feel free to reach out to me directly (email is on my GitHub [profile](https://github.com/adamelliotfields)).
