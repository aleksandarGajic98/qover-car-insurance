import { getCarStub, getCarWithInitialPriceStub } from '../../stub';
import {
  calculateYearlyGlobal,
  calculateMonthlyGlobal,
  calculateYearlyUniversal,
  calculateMonthlyUniversal,
} from 'src/cars/services/insurance/calculate-price';

describe('Testing algorithms for generating price for insurance offers', () => {
  it('Should return yearly.global price', () => {
    const car = getCarStub();
    const res = calculateYearlyGlobal(car);
    expect(res).toBe(car.globalPrice);
  });
  it('Should return yearly.universal price', () => {
    const car = getCarWithInitialPriceStub();
    const res = calculateYearlyUniversal(car);
    expect(res).toBe(2550);
  });
  it('Should return monthly.global price', () => {
    const car = getCarStub();
    const res = calculateMonthlyGlobal(car);
    expect(res).toBe(12.5);
  });
  it('Should return yearly.universal price', () => {
    const car = getCarWithInitialPriceStub();
    const res = calculateMonthlyUniversal(car);
    expect(res).toBe(212.5);
  });
});
