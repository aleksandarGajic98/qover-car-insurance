import { InsuranceOfferType } from 'src/cars/domain';

export class InsuranceOfferDto {
  price: number;
  coverage: number;
  duration: number;
  medicalExpenses: number;
  type: InsuranceOfferType;
  travelAssistance: number;
  personalAssistance: number;
}
