export interface DropDownData {
	data: [
		{
			value?: string;
			label?: string;
		}
	];
	classNames?: string[];
	customStyles?: {
		container?: string[];
		select?: string[];
		option?: string[];
		label?: string[];
		error?: string[];
	};
}
