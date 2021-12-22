import { Car as CarDb } from 'src/cars/db';
import {
  Car,
  CarWithInitialPrice,
  InsuranceOffer,
  InsuranceOfferType,
} from 'src/cars/domain';
import { GetInsurancePlanParams, InsuranceOfferDto } from 'src/cars/dto';
import { getBaseInsuranceOfferValues } from 'src/cars/services/insurance/util';

export const getInitiaPriceMock = () => 6000;

export const getCarStub = (): Car => ({
  id: 'id',
  name: 'BMW',
  globalPrice: 150,
  universalPercentage: 0.4,
});

export const getCarDbStub = (): CarDb => ({
  ver: 1,
  name: 'BMW',
  globalPrice: 150,
  universalPercentage: 0.4,
});

export const getCarWithInitialPriceStub = (): CarWithInitialPrice => ({
  id: 'id',
  name: 'BMW',
  globalPrice: 150,
  initialPrice: getInitiaPriceMock(),
  universalPercentage: 0.4,
});

export const getOfferStub = (price: number): InsuranceOffer => ({
  price,
  ...getBaseInsuranceOfferValues(),
});

export const getOfferDto = (
  type: InsuranceOfferType,
  price: number,
): InsuranceOfferDto => ({
  type,
  price,
  ...getBaseInsuranceOfferValues(),
});

export const getInsurancePlanParamsStub = (
  plan: string,
): GetInsurancePlanParams => ({
  plan,
  age: 30,
  price: getInitiaPriceMock(),
});
