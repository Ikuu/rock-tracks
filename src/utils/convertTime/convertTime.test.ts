import { convertTime } from './'

test('Converts time correct', () => {
  expect(convertTime(331560)).toEqual('5:32')
  expect(convertTime(388733)).toEqual('6:29')
  expect(convertTime(426000)).toEqual('7:06')
})
