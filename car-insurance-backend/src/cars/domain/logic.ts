import { InsuranceOfferType } from './insurance';
import { InsuranceOfferTypesValues } from '../consts';

const AdultAge = 18;
const RiskFreeAge = 25;
const MinimumPrice = 5000;
export const isUserMinor = (age: number) => age < AdultAge;
export const isPriceValid = (price: number) => price > MinimumPrice;
export const isPersonRisky = (age: number) =>
  age < RiskFreeAge && age > AdultAge;

export const isInsurancePlan = (str: string) => {
  if (str === '') return false;
  return (
    str === 'all' ||
    !str
      .split('-')
      .some(
        (val) => !InsuranceOfferTypesValues.includes(val as InsuranceOfferType),
      )
  );
};
