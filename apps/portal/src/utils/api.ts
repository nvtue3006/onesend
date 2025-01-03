export const getIdParams = (path: string): string | undefined => {
	if (!path.includes('/')) {
		return undefined;
	}

	const id = path.split('/').pop();

	if (!id) {
		return undefined;
	}

	return id;
};

export const jsonParser = (data: unknown): object | null => {
	if (!data) {
		return null;
	}
	return JSON.parse(JSON.stringify(data, (_key, value) => (typeof value === 'bigint' ? value.toString() : value)));
};
