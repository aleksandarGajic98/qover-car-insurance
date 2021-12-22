import { HashService } from 'src/auth/services';

describe('HashService', () => {
  let hashService: HashService;
  beforeEach(() => {
    hashService = new HashService(10);
  });

  it('should hash the value', async () => {
    const value = 'random string';
    const res = await hashService.hash(value);
    expect(res).not.toEqual(value);
  });

  it('should return true for comparison', async () => {
    const value = 'random string';
    const hash = await hashService.hash(value);

    const res = await hashService.compare(value, hash);

    expect(res).toBe(true);
  });

  it('should return false for comparison', async () => {
    const value = 'random string';
    const value2 = 'random string 2';
    const hash = await hashService.hash(value);
    const hash2 = await hashService.hash(value2);

    const res = await hashService.compare(value, hash2);

    expect(res).toBe(false);
  });
});
