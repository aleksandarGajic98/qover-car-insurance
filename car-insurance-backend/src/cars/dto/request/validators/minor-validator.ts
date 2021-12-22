import { isUserMinor } from 'src/cars/domain';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function NotMinor(
  validationOptions: ValidationOptions = {
    message: 'Person has to be of legal age',
  },
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPersonMinor',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'number' && !isUserMinor(value);
        },
      },
    });
  };
}
