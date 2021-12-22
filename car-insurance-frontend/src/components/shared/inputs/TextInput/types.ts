export interface TextInputType {
	type?: string;
	classNames?: string[];
	customStyles?: { 
		container: string[];
		error: string[];
		input: string[];
		label: string[];
		wrapper: string[];
	}
}
