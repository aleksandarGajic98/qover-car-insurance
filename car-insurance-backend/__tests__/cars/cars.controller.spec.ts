import { Test } from '@nestjs/testing';
import { CarsService } from 'src/cars/cars.service';
import { CarsController } from 'src/cars/cars.controller';
import { getCarStub, getInsurancePlanParamsStub, getOfferDto } from './stub';

jest.mock('src/cars/cars.service');

describe('CarsController', () => {
  let carsController: CarsController;
  let carsService: CarsService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    carsController = module.get<CarsController>(CarsController);
    carsService = module.get<CarsService>(CarsService);
  });

  it('should return all cars', async () => {
    const res = await carsController.findAllCars();

    expect(res).toEqual([getCarStub()]);
    expect(carsService.findAll).toHaveBeenCalled();
  });

  it('should return insurance offers', async () => {
    const params = getInsurancePlanParamsStub('yearly.glosadbal');
    const res = await carsController.getInsurancePlans('carId', params);

    expect(res).toEqual({
      offers: [getOfferDto('yearly.universal', 2550)],
    });
    expect(carsService.findAll).toHaveBeenCalled();
  });
});
