import { sum } from 'utils/example';

describe('example module', () => {
  it('sum', () => {
    expect(sum(5,3)).toBe(8);
  })
})
