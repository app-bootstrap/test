import * as fs from 'fs';
import * as path from 'path';

export const staticsPath = path.resolve(__dirname, 'statics');

export function getWebviewContent(): string {
  const filePath = path.resolve(staticsPath, 'page.html');
  return fs.readFileSync(filePath, 'utf-8');
};
