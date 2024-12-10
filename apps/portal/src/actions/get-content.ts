import { ErrorVars } from '../../../../shared/error/error-vars';
import { Requests } from '../../../../shared/services/requests';

interface GetContentResponse {
	error: string | null;
	content?: string;
	type?: string;
}

export const getContent = async (code: string): Promise<GetContentResponse> => {
	if (!/^\d{6}$/.test(code)) {
		return { error: ErrorVars.BAD002_INPUT_NOT_VALID };
	}

	const requestService = new Requests();

	const request = await requestService.getRequest(code);

	if (!request) {
		return { error: ErrorVars.BAD001_RESOURCE_NOT_FOUND };
	}

	return {
		error: null,
		content: request.content,
		type: request.type,
	};
};
