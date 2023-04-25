Module to avoid the dumb choice to get rid of __dirname and __filename in Node 18+

## Install

```
$ npm install --save @atomic-reactor/dirname
```

## Usage

```
import { dirname, filename } from '@atomic-reactor/dirname';

const __dirname = dirname(import.meta.url);
const __filename = filename(import.meta.url);
```
