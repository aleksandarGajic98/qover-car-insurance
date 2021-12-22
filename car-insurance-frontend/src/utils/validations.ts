export const isRequired = (value?: string) => !!value;

export const getFormName = (value: string) => {
	switch (value) {
		case 'Person has to be of legal age':
		case 'Sorry! We can not accept this particular risk':
			return 'age';
		case 'Price must be over 5000':
			return 'price';
		default:
			return '';
	}
};
