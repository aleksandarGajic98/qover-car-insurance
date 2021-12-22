import {
  Coverage,
  Duration,
  MedicalExpenses,
  TravelAssistance,
  PersonalAssistance,
} from 'src/cars/consts';
import { getInsuranceOfferForPrice } from 'src/cars/services/insurance/util';

describe('Util functions for insurance plans', () => {
  it('Should return insurance offer', () => {
    const currPrice = 300;
    const res = getInsuranceOfferForPrice(currPrice);
    const {
      price,
      duration,
      coverage,
      medicalExpenses,
      travelAssistance,
      personalAssistance,
    } = res;
    expect(price).toBe(currPrice);
    expect(duration).toBe(Duration);
    expect(coverage).toBe(Coverage);
    expect(medicalExpenses).toBe(MedicalExpenses);
    expect(travelAssistance).toBe(TravelAssistance);
    expect(personalAssistance).toBe(PersonalAssistance);
  });
});
