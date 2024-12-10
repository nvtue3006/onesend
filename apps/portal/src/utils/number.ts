export const randomNumber = (max: number): string => {
	const min = Math.pow(10, max - 1);
	const maxNumber = Math.pow(10, max) - 1;
	return (Math.floor(Math.random() * (maxNumber - min + 1)) + min).toString();
};
