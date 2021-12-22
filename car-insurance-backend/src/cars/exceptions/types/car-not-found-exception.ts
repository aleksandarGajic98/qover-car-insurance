import { CarNotFoundMessage } from '../consts';
import { NotFoundException } from 'src/shared';

export class CarNotFoundException extends NotFoundException {
  constructor() {
    super(CarNotFoundMessage);
  }
}
