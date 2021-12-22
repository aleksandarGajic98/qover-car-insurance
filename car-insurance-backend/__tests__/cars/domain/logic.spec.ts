import {
  isInsurancePlan,
  isPersonRisky,
  isPriceValid,
  isUserMinor,
} from 'src/cars/domain';

describe('Testing car logic', () => {
  describe('Is person minor', () => {
    it('should return false', () => {
      const value = 20;
      const res = isUserMinor(value);
      expect(res).toBe(false);
    });

    it('should return true', () => {
      const value = 15;
      const res = isUserMinor(value);
      expect(res).toBe(true);
    });
  });

  describe('Is person risky', () => {
    it('should return false if person is not between 18-25 years', () => {
      const value = 14;
      const value2 = 30;
      let res = isPersonRisky(value);
      expect(res).toBe(false);
      res = isPersonRisky(value2);
      expect(res).toBe(false);
    });

    it('should return true if person is between 18-25 years', () => {
      const value = 19;
      const res = isPersonRisky(value);
      expect(res).toBe(true);
    });
  });

  describe('Is string valid a concatenated insurance plans', () => {
    it('should return false if any value is not in [yearly.global, yearly.universal, monthly.global, monthly.universal] ot just all', () => {
      const value = 'some string';
      expect(isInsurancePlan(value)).toBe(false);
      const value2 = 'yearly.global-adas';
      expect(isInsurancePlan(value2)).toBe(false);
    });

    it('should return true if all values are in [yearly.global, yearly.universal, monthly.global, monthly.universal, all]', () => {
      const value = 'yearly.global';
      expect(isInsurancePlan(value)).toBe(true);
      const value2 = 'yearly.global-monthly.universal';
      expect(isInsurancePlan(value2)).toBe(true);
      const value3 = 'all';
      expect(isInsurancePlan(value2)).toBe(true);
    });
  });

  describe('Is price value', () => {
    it('should return false if price is below 5000', () => {
      const price = 4000;
      expect(isPriceValid(price)).toBe(false);
    });

    it('should return true price is equal or above 5000', () => {
      const price = 6000;
      expect(isPriceValid(price)).toBe(true);
    });
  });
});
