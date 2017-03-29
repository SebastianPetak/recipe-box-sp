const checkForLocalStorage = () => {
	// Check if user's browser supports local storage
	if (typeof(Storage) == 'undefined') {
		return false;
	} else {
		return true;
	}
};

module.exports = checkForLocalStorage();
