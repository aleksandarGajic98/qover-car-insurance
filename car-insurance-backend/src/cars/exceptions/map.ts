import { CarNotFoundResponse } from '../dto';
import { CarNotFoundException } from './types';
import { mapNotFoundToResponse } from 'src/shared';

export const mapCarNotFoundToResponse = (
  exc: CarNotFoundException,
): CarNotFoundResponse => mapNotFoundToResponse(exc);
