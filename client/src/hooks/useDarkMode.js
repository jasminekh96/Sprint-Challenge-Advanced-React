import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', true);
	useEffect(
		() => {
			if (darkMode === true) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		},
		[ darkMode ],
	);
	return [ darkMode, setDarkMode ];
};
