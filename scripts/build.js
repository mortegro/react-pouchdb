import spawn from 'cross-spawn';
import flatten from 'lodash/flatten';

flatten(
  [[], ['browser'], ['node']].map(path =>
    ['es', 'cjs'].map(target => [...path, target].join('/'))
  )
).forEach(outDir =>
  spawn(
    'npx',
    [...`babel src --out-dir ${outDir}`.split(' '), ...process.argv.slice(5)],
    {
      stdio: 'inherit'
    }
  )
);
