import { getInsuranceOfferForPrice } from './util';
import { getInsurancePriceCalculator } from './calculate-price-factory';
import { Car, InsuranceOffer, InsuranceOfferType } from 'src/cars/domain';

export const getInsuranceOfferFor =
  <T extends Car>(car: T) =>
  (type: InsuranceOfferType): InsuranceOffer => {
    return {
      ...getInsuranceOfferForPrice(getInsurancePriceCalculator(type)(car)),
    };
  };
