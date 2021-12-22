import { isPriceValid } from 'src/cars/domain';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsPriceValid(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPriceValid',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'number' && isPriceValid(value);
        },
      },
    });
  };
}
