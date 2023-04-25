import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const filename = (u) => fileURLToPath(u);
export const dirname = (u) => path.dirname(filename(u));
