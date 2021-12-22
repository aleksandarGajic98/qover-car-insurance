import { CarDocument } from '../db';
import { InsuranceOfferDto } from '../dto';
import { InsuranceOfferTypesValues } from '../consts';
import { Car, InsuranceOffer, InsuranceOfferType } from '../domain';

export const getInsurancePlansFromString = (plan: string) =>
  plan === 'all'
    ? InsuranceOfferTypesValues
    : (plan.split('-') as InsuranceOfferType[]);

export const getOfferDto =
  (offer: InsuranceOffer) =>
  (type: InsuranceOfferType): InsuranceOfferDto => ({
    type,
    ...offer,
  });

export const getDomainCar = (car: CarDocument): Car => ({
  id: car._id,
  globalPrice: car.globalPrice,
  name: car.name,
  universalPercentage: car.universalPercentage,
});

export const round = (price: number) =>
  Math.round((price + Number.EPSILON) * 100) / 100;
