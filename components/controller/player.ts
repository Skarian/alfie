import { useRef, useEffect } from 'react';

// Reference to a set of active KeyboardEvent.code entries
export const useKeyCodes = () => {
	const codes = useRef(new Set());
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => codes.current.add(e.code);
		const onKeyUp = (e: KeyboardEvent) => codes.current.delete(e.code);
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('keyup', onKeyUp);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('keyup', onKeyUp);
		};
	}, []);
	return codes;
};
