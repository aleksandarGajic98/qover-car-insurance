import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { InsuranceOffer, InsuranceOfferType } from '../types';

type InsuranceOfferFilter = 'yearly' | 'monthly';

interface InsuranceOfferState {
	offers: InsuranceOffer[];
	filter: InsuranceOfferFilter;
	visibleOffers: InsuranceOffer[];
	selectedOffer?: InsuranceOffer;
}

const initialState: InsuranceOfferState = {
	offers: [],
	filter: 'yearly',
	visibleOffers: [],
	selectedOffer: undefined,
};

export const insuranceOfferSlice = createSlice({
	name: 'insuranceOffer',
	initialState,
	reducers: {
		filterChanged: (
			state,
			{ payload }: PayloadAction<InsuranceOfferFilter>
		) => {
			state.filter = payload;
			state.visibleOffers = state.offers.filter(offer =>
				offer.type.includes(payload)
			);
		},
		selectedOffer: (state, { payload }: PayloadAction<InsuranceOfferType>) => {
			state.selectedOffer = state.visibleOffers.find(
				offer => offer.type === payload
			);
		},
		setOffers: (state, { payload }: PayloadAction<InsuranceOffer[]>) => {
			state.offers = payload;
			state.visibleOffers = payload.filter(offer =>
				offer.type.includes(state.filter)
			);
			const [firstOffer] = state.visibleOffers;
			state.selectedOffer = firstOffer;
		},
	},
});

export const { filterChanged, selectedOffer, setOffers } =
	insuranceOfferSlice.actions;

export const selectFilter = (state: RootState) => state.insuranceOffer.filter;
export const selectAllOffers = (state: RootState) =>
	state.insuranceOffer.offers;
export const selectVisibleOffers = (state: RootState) =>
	state.insuranceOffer.visibleOffers;
export const selectSelectedOffer = (state: RootState) =>
	state.insuranceOffer.selectedOffer;

export const insuranceOfferReducer = insuranceOfferSlice.reducer;
