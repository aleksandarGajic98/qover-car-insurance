import { NotFoundException } from './not-found-exception';

export const mapNotFoundToResponse = <T extends NotFoundException>(exc: T) => ({
  satusCode: 404,
  message: exc.message,
  timestamp: exc.timestamp,
});
