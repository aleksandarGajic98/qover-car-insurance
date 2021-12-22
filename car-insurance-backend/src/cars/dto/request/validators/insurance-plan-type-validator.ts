import { isInsurancePlan } from 'src/cars/domain';
import { InsuranceOfferTypesValues } from 'src/cars/consts';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsInsurancePlan(
  validationOptions: ValidationOptions = {
    message: `The insurance plan values can be: ${InsuranceOfferTypesValues.join(
      `', '`,
    )}' and 'all'`,
  },
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isInsurancePlan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && value && isInsurancePlan(value);
        },
      },
    });
  };
}
