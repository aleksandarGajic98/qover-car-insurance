export type InsuranceOfferType =
  | 'yearly.global'
  | 'monthly.global'
  | 'yearly.universal'
  | 'monthly.universal';

export interface InsuranceOffer {
  price: number;
  duration: number;
  coverage: number;
  medicalExpenses: number;
  travelAssistance: number;
  type: InsuranceOfferType;
  personalAssistance: number;
}
