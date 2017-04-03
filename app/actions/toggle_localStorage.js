import { TOGGLE_LOCALSTORAGE } from './types';
// True means users browser supports local storage, false means it doesn't.
export default function toggleLocalStorage() {
	if (typeof(Storage) == 'undefined') {
		return {
			type: TOGGLE_LOCALSTORAGE,
			paylaod: false
		};
	} else {
		return {
			type: TOGGLE_LOCALSTORAGE,
			payload: true
		};
	}
}
