import { useEffect, useRef } from 'react';

export const useDidMountEffect = <F extends () => void, D extends Array<any>>(
	func: F,
	deps: D
) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

export default useDidMountEffect;
