import { Car } from 'src/cars/db';
import { getCarDbStub, getInitiaPriceMock, getOfferDto } from './stub';
import { MockModel } from '__tests__/util';
import { CarsService } from 'src/cars/cars.service';
import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CarNotFoundException } from 'src/cars/exceptions';

class MockCarModel extends MockModel<Car>(getCarDbStub()) {}

describe('CarsService', () => {
  let mockCarModel: MockCarModel;
  let carsService: CarsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CarsService,
        {
          provide: getModelToken(Car.name),
          useValue: MockCarModel,
        },
      ],
    }).compile();

    carsService = module.get<CarsService>(CarsService);
    mockCarModel = module.get<MockCarModel>(getModelToken(Car.name));
    jest.clearAllMocks();
  });

  it('Should return all cars (findAll)', async () => {
    const expected = [getCarDbStub()];
    const findSpy = jest.spyOn(mockCarModel, 'find');

    const res = await carsService.findAll();

    expect(res).toEqual(expected);
    expect(findSpy).toHaveBeenCalled();
  });

  it('Should return yearly.global insurance offer for car', async () => {
    const expected = {
      offers: [getOfferDto('yearly.global', 150)],
    };
    const findSpy = jest.spyOn(mockCarModel, 'find');

    const res = await carsService.getInsuranceOffers('carId', {
      age: 30,
      plan: 'yearly.global',
      price: getInitiaPriceMock(),
    });

    expect(res).toEqual(expected);
    expect(findSpy).toHaveBeenCalled();
  });

  it('Should return multiple insurance offers for car', async () => {
    const expected = {
      offers: [
        getOfferDto('yearly.global', 150),
        getOfferDto('monthly.global', 12.5),
        getOfferDto('yearly.universal', 2550),
      ],
    };
    const findSpy = jest.spyOn(mockCarModel, 'find');

    const res = await carsService.getInsuranceOffers('carId', {
      age: 30,
      plan: 'yearly.global-yearly.universal-monthly.global',
      price: getInitiaPriceMock(),
    });

    expect(res.offers).toEqual(expect.arrayContaining(expected.offers));
    expect(findSpy).toHaveBeenCalled();
  });

  it('Should throw an error', async () => {
    mockCarModel.find = jest.fn(() => ({
      exec: () => [],
    }));

    expect(
      carsService.getInsuranceOffers('carId', {
        age: 30,
        plan: 'yearly.global-yearly.universal-monthly.global',
        price: getInitiaPriceMock(),
      }),
    ).rejects.toThrow(CarNotFoundException);
  });
});
