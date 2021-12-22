import { isPasswordValid } from 'src/auth/domain/';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsPassword(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && isPasswordValid(value);
        },
      },
    });
  };
}
