import { isPersonRisky } from 'src/cars/domain';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function RiskFree(
  validationOptions: ValidationOptions = {
    message: 'Sorry! We can not accept this particular risk',
  },
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isRiskFree',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'number' && !isPersonRisky(value);
        },
      },
    });
  };
}
