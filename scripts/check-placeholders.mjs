// Lists any [bracketed] placeholder text still left in src/content/*.ts.
// By default it only warns, so the site can go live while you fill things in.
// Set STRICT_PLACEHOLDERS=1 to make the build fail until every placeholder is gone.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../src/content/', import.meta.url).pathname;
const strict = process.env.STRICT_PLACEHOLDERS === '1';
const hits = [];

for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'types.ts')) {
  readFileSync(join(dir, file), 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (line.trim().startsWith('//')) return;
      // only look inside string literals
      for (const str of line.match(/(['"`])(?:\\.|(?!\1).)*\1/g) ?? []) {
        for (const ph of str.match(/\[[^\]]+\]/g) ?? []) hits.push(`  ${file}:${i + 1}  ${ph}`);
      }
    });
}

if (hits.length) {
  console[strict ? 'error' : 'warn'](
    `${strict ? '✖' : '⚠'} ${hits.length} placeholder(s) still to fill in:\n${hits.join('\n')}\n`,
  );
  if (strict) process.exit(1);
} else {
  console.log('✓ No placeholders left in src/content.');
}
