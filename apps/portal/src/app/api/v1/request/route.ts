import { NextRequest, NextResponse } from 'next/server';
import { ErrorVars } from '../../../../../../../shared/error/error-vars';
import { Requests } from '../../../../../../../shared/services/requests';
const MAX_CONTENT_LENGTH = 10000;

export const POST = async (request: NextRequest): Promise<Response> => {
	try {
		console.log('vo');
		const { content, type } = await request.json();

		if (!type) {
			return new Response(ErrorVars.BAD002_INPUT_NOT_VALID, {
				status: 400,
			});
		}

		if (type === 'TEXT') {
			if (!content || (content && content.length > MAX_CONTENT_LENGTH)) {
				return new Response(ErrorVars.BAD002_INPUT_NOT_VALID, {
					status: 400,
				});
			}
		}

		const requestService = new Requests();

		const code = await requestService.createRequest(content, type);

		return NextResponse.json({ data: code });
	} catch (e) {
		console.log(e);
		return new Response(ErrorVars.IN004_SERVER_ERROR, { status: 500 });
	}
};
