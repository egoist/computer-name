const computerName = require('../')

test('main', () => {
  expect(typeof computerName()).toBe('string')
})
