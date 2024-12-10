import { Requests } from '../../../../shared/services/requests';

interface PutContentResponse {
	error: string | null;
	code?: string;
}

const PutContentError = {
	CONTENT_OVERLOAD: 'CONTENT_OVERLOAD',
	TYPE_INVALID: 'TYPE_INVALID',
	INTERNAL_ERROR: 'INTERNAL_ERROR',
};

export const putContent = async (content: string, type: 'TEXT' | 'FILE'): Promise<PutContentResponse> => {
	if (content.length > 10000) {
		return { error: PutContentError.CONTENT_OVERLOAD };
	}

	if (!['TEXT', 'FILE'].includes(type)) {
		return { error: PutContentError.TYPE_INVALID };
	}

	const requestService = new Requests();

	const code = await requestService.createRequest(content, type);

	if (!code) {
		return { error: PutContentError.INTERNAL_ERROR };
	}

	return {
		error: null,
		code,
	};
};
