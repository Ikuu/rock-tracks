import { formatDate } from './'

test('Formats date correctly', () => {
  expect(formatDate('1991-07-29T07:00:00Z')).toEqual('29/07/1991')
})
