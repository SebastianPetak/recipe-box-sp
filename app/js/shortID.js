module.exports = function generate(str) {
	return (
		str.concat(String(Math.floor(Math.random() * ((9999999 - 9) + 9))))
	);
};
