export type InsuranceOfferType =
  | 'all'
  | 'yearly.global'
  | 'monthly.global'
  | 'yearly.universal'
  | 'monthly.universal';

export class InsuranceOffer {
  price: number;
  duration: number;
  coverage: number;
  medicalExpenses: number;
  travelAssistance: number;
  personalAssistance: number;
}
