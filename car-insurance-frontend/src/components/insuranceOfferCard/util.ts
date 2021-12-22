const currencyFormat = new Intl.NumberFormat('de-DE', {
	style: 'currency',
	currency: 'EUR',
	maximumFractionDigits: 0,
});

export const getDurationTravelMessage = (val: number) => [
	{
		value: 'Maximum duration travel',
		isBold: true,
	},
	{
		value: 'of',
		isBold: false,
	},
	{
		value: `${val} days`,
		isBold: true,
	},
];

export const getMedicalExpensesMessage = (val: number) => [
	{
		value: 'Medical expenses reimbursement',
		isBold: true,
	},
	{
		value: 'up to',
		isBold: false,
	},
	{
		value: currencyFormat.format(val),
		isBold: true,
	},
];

export const getPersonalAssistanceMessage = (val: number) => [
	{
		value: 'Personal assistance abroad',
		isBold: true,
	},
	{
		value: 'up to',
		isBold: false,
	},
	{
		value: currencyFormat.format(val),
		isBold: true,
	},
];

export const getCoverageMessage = (val: number) => [
	{
		value: `Converage duration: ${val} year`,
		isBold: true,
	},
];
