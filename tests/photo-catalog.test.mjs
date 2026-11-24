import assert from 'node:assert/strict';
import test from 'node:test';
import { createPhotoCatalog } from '../src/lib/photo-catalog.ts';

function catalog(names, alt = 'A photograph') {
  return createPhotoCatalog(
    Object.fromEntries(
      names.map((name) => [name + '.jpg', { width: 2400, height: 1600 }]),
    ),
    Object.fromEntries(names.map((name) => [name, alt])),
    [{ rule: '^202402', description: 'Winter' }],
  );
}

test('groups by capture month and orders nested sequence numbers numerically', () => {
  const { groups, photos } = catalog([
    '20240226-1-2',
    '20240301-1',
    '20240226-1-10',
    '20240229-1',
  ]);
  assert.deepEqual([...groups.keys()], ['2024-03', '2024-02']);
  assert.deepEqual(
    groups.get('2024-02').map((photo) => photo.name),
    ['20240229-1', '20240226-1-10', '20240226-1-2'],
  );
  assert.equal(photos[0].label, 'March 2024');
  assert.equal(photos[0].caption, undefined);
  assert.equal(photos[1].caption, 'Winter');
});

test('rejects impossible dates and missing descriptions before publishing', () => {
  assert.throws(() => catalog(['20250229-1']), /Invalid photograph date/);
  assert.throws(() => catalog(['20241302-1']), /Invalid photograph date/);
  assert.throws(() => catalog(['beach']), /Invalid photograph filename/);
  assert.throws(
    () => catalog(['20240229-1'], '  '),
    /Missing photo description/,
  );
});
