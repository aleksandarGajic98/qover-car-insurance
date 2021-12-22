import { CarId, CarsRoute } from './consts';
import { CarsService } from './cars.service';
import { GetInsurancePlanParams } from './dto';
import { UseCarExceptionHandling } from './exceptions';
import { IsAuthenticatedJwt, UseValidation } from 'src/shared';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller(CarsRoute)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  findAllCars() {
    return this.carsService.findAll();
  }

  @Get(`:${CarId}/insurance`)
  @UseValidation(true)
  @IsAuthenticatedJwt()
  @UseCarExceptionHandling()
  getInsurancePlans(
    @Param('id') id: string,
    @Query() params: GetInsurancePlanParams,
  ) {
    return this.carsService.getInsuranceOffers(id, params);
  }
}
