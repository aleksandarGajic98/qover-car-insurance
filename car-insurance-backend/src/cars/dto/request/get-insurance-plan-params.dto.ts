import { Type } from 'class-transformer';
import { IsInt, IsNumber } from 'class-validator';
import {
  NotMinor,
  RiskFree,
  IsPriceValid,
  IsInsurancePlan,
} from './validators';

export class GetInsurancePlanParams {
  @IsInt()
  @RiskFree()
  @NotMinor()
  @Type(() => Number)
  age: number;
  @IsNumber()
  @IsPriceValid({ message: 'Price must be over 5000' })
  @Type(() => Number)
  price: number;
  @IsInsurancePlan()
  plan: string;
}
