import { CarNotFoundMessage } from 'src/cars/exceptions/';
import { CarNotFoundException } from 'src/cars/exceptions';
import { mapCarNotFoundToResponse } from 'src/cars/exceptions/map';

describe('Mapping from CarNotFoundException to CarNotFoundResponse', () => {
  it('should return correct values', () => {
    const exc = new CarNotFoundException();
    const timestamp = exc.timestamp;
    const res = mapCarNotFoundToResponse(exc);
    expect(res.satusCode).toBe(404);
    expect(res.timestamp).toBe(timestamp);
    expect(res.message).toBe(CarNotFoundMessage);
  });
});
