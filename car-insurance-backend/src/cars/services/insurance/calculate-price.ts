import { round } from 'src/cars/util';
import { Car, CarWithInitialPrice } from 'src/cars/domain';

type InsurancePriceCalculator<T extends Car> = (car: T) => number;

export const calculateYearlyGlobal: InsurancePriceCalculator<Car> = (
  car: Car,
) => round(car.globalPrice);

export const calculateYearlyUniversal: InsurancePriceCalculator<
  CarWithInitialPrice
> = (car: CarWithInitialPrice) =>
  round(car.globalPrice + car.universalPercentage * car.initialPrice);

export const calculateMonthlyUniversal: InsurancePriceCalculator<
  CarWithInitialPrice
> = (car: CarWithInitialPrice) => round(calculateYearlyUniversal(car) / 12);

export const calculateMonthlyGlobal: InsurancePriceCalculator<Car> = (
  car: Car,
) => round(calculateYearlyGlobal(car) / 12);
