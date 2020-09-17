import sum from '../../src/utils/sum';

describe('A Sum function', () => {
  it('should add between value a and value b', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
