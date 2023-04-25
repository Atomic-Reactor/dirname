import assert from 'node:assert';
import { dirname, filename } from '../index.js';

const __dirname = dirname(import.meta.url);
const __filename = filename(import.meta.url);

const valid =
    String(__dirname).endsWith('/Dirname/test') &&
    String(__filename).endsWith('/Dirname/test/spec.js');

console.log('');
console.log({ valid, dirname: __dirname, filename: __filename });
console.log('');

assert.ok(valid);
