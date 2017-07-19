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
