import { NextRequest, NextResponse } from 'next/server';
import { getIdParams, jsonParser } from '@/utils/api';
import { ErrorVars } from '../../../../../../../../shared/error/error-vars';
import { Requests } from '../../../../../../../../shared/services/requests';

interface IResponse {
	type: string;
	content: string;
	files: {
		name: string;
		url: string;
	}[];
}

//		const res = await fetch(`/api/v1/request/123456`, {
// 			method: 'GET',
// 		});

//		if (!res.ok) {
// 			return;
// 		}

//		const payload = await res.json();

export const GET = async (request: NextRequest): Promise<Response> => {
	try {
		const code = getIdParams(request.nextUrl.pathname);

		if (!code || code.length !== 6) {
			return new Response(ErrorVars.BAD002_INPUT_NOT_VALID, {
				status: 400,
			});
		}

		const requestService = new Requests();

		const data = await requestService.getRequest(code);

		return NextResponse.json({ data: jsonParser(data) });
	} catch (e) {
		return new Response(ErrorVars.IN004_SERVER_ERROR, { status: 500 });
	}
};
