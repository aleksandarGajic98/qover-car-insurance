import { Model } from 'mongoose';
import { Car, CarDocument } from './db';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { getInsuranceOfferFor } from './services';
import { CarNotFoundException } from './exceptions';
import { getDomainCar, getInsurancePlansFromString, getOfferDto } from './util';
import {
  GetInsurancePlanParams,
  InsurancePlanOfferSuccessResponse,
} from './dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}

  findAll() {
    return this.carModel.find().exec();
  }

  async getInsuranceOffers(carId: string, params: GetInsurancePlanParams) {
    const { plan, price } = params;

    const insurancePlans = getInsurancePlansFromString(plan);

    const car = (await this.carModel.find({ id: carId }).exec())[0];

    if (!car) throw new CarNotFoundException();

    const res: InsurancePlanOfferSuccessResponse = {
      offers: [],
    };

    for (const insurancePlan of insurancePlans) {
      const offer = getInsuranceOfferFor({
        initialPrice: price,
        ...getDomainCar(car),
      })(insurancePlan);

      res.offers.push(getOfferDto(offer)(insurancePlan));
    }

    return res;
  }
}
