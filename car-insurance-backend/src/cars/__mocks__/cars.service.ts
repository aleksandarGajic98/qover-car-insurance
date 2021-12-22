import { getCarStub, getOfferDto } from '__tests__/cars/stub';

export const CarsService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockResolvedValue([getCarStub()]),
  getInsuranceOffers: jest.fn().mockResolvedValue({
    offers: [getOfferDto('yearly.universal', 2550)],
  }),
});
