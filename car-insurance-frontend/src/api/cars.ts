import { get, getParsedParams } from '../utils/api';
import { Car, InsuranceOffer, InsuranceOfferType } from '../store/types';

type CarInsuranceParams = {
	age: number;
	price: number;
	plan: InsuranceOfferType | 'all';
};

type GetInsuranceOfferParams = {
	carId: string;
	params: CarInsuranceParams;
	token: string;
}

export const getAllCars = () => get<Car[]>('cars');
export const getInsuranceOffersForCar = ({ carId, params, token} : GetInsuranceOfferParams) =>
	get<{ offers: InsuranceOffer[] }>(
		`cars/${carId}/insurance/?${getParsedParams(params)}`,
		{ Authorization: `Bearer ${token}` }
	);
