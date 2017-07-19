# Bootstrap CSS Modules
> Bootstrap 4 Alpha 6 as importable CSS Modules.

### Completed

 - [x] Utilities
 - [x] Grid

### Installation

```bash
yarn add git://github.com/adamelliotfields/bootstrap-css-modules.git
```

### Usage
 
```javascript
import grid from 'bootstrap-css-modules/layout/grid';
import background from 'bootstrap-css-modules/utilities/background'

const { container, row, col4 } = grid;
const { bgPrimary, bgFaded } = background;

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
