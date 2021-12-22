import {
  Coverage,
  Duration,
  MedicalExpenses,
  TravelAssistance,
  PersonalAssistance,
} from 'src/cars/consts';
import { InsuranceOffer } from 'src/cars/domain';

export const getInsuranceOfferForPrice = (price: number): InsuranceOffer => ({
  price,
  ...getBaseInsuranceOfferValues(),
});

export const getBaseInsuranceOfferValues = (): Omit<
  InsuranceOffer,
  'price'
> => ({
  duration: Duration,
  coverage: Coverage,
  medicalExpenses: MedicalExpenses,
  travelAssistance: TravelAssistance,
  personalAssistance: PersonalAssistance,
});
