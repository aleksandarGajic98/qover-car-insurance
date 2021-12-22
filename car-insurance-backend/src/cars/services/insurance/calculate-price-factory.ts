import { InsuranceOfferType } from 'src/cars/domain';
import {
  calculateYearlyGlobal,
  calculateMonthlyGlobal,
  calculateYearlyUniversal,
  calculateMonthlyUniversal,
} from './calculate-price';

export function getInsurancePriceCalculator(type: InsuranceOfferType) {
  switch (type) {
    case 'yearly.global':
      return calculateYearlyGlobal;
    case 'yearly.universal':
      return calculateYearlyUniversal;
    case 'monthly.global':
      return calculateMonthlyGlobal;
    case 'monthly.universal':
      return calculateMonthlyUniversal;
    default:
      throw new Error(`No calculator for type ${type}`);
  }
}
