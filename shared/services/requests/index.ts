import { RequestModal } from '@/shared/database/models/request';
import { Encryption } from '@/shared/services/encryption';
import { randomNumber } from '@/apps/portal/src/utils/number';

interface RequestDownloadResponse {
	content: string;
	type: 'FILE' | 'TEXT';
}

export class Requests {
	// @errorHandler
	public async getRequest(code: string): Promise<RequestDownloadResponse | null> {
		const requestModal = new RequestModal();

		const request = await requestModal.getRequestByCode(code);

		if (!request) {
			return null;
		}

		if (request.type === 'TEXT') {
			const encryptionService = new Encryption();

			const decryptContent = await encryptionService.decrypt(request.content);

			return {
				content: decryptContent,
				type: request.type,
			};
		}

		return {
			content: '',
			type: request.type,
		};
	}

	public async createRequest(content: string, type: 'TEXT' | 'FILE'): Promise<string> {
		let code = randomNumber(6);

		const encryptionService = new Encryption();

		const encryptContent = await encryptionService.encrypt(content);

		const requestModal = new RequestModal();

		await requestModal.insertRequest(code, encryptContent, type);

		return code;
	}
}
