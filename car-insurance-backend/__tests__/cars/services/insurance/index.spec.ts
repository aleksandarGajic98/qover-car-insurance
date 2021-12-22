import { InsuranceOfferType } from 'src/cars/domain';
import { getInsuranceOfferFor } from 'src/cars/services';
import {
  getCarStub,
  getOfferStub,
  getCarWithInitialPriceStub,
} from '../../stub';

describe('Testing getInsuranceOfferFor', () => {
  it('Should return correct yearly.global insurance offer', () => {
    const car = getCarStub();
    const type: InsuranceOfferType = 'yearly.global';
    const res = getInsuranceOfferFor(car)(type);
    expect(res).toEqual(getOfferStub(car.globalPrice));
  });

  it('Should return correct yearly.universal insurance offer', () => {
    const car = getCarWithInitialPriceStub();
    const type: InsuranceOfferType = 'yearly.universal';
    const res = getInsuranceOfferFor(car)(type);
    expect(res).toEqual(getOfferStub(2550));
  });

  it('Should return correct monthly.universal insurance offer', () => {
    const car = getCarWithInitialPriceStub();
    const type: InsuranceOfferType = 'monthly.universal';
    const res = getInsuranceOfferFor(car)(type);
    expect(res).toEqual(getOfferStub(212.5));
  });

  it('Should return correct monthly.global insurance offer', () => {
    const car = getCarWithInitialPriceStub();
    const type: InsuranceOfferType = 'monthly.global';
    const res = getInsuranceOfferFor(car)(type);
    expect(res).toEqual(getOfferStub(12.5));
  });
});
