import { errorHandler } from '@/shared/decorations/error-handler';
import mongoose, { Model } from 'mongoose';
import { ModelBase } from '@/shared/database/models/base';
import { RequestSchema, IRequest } from '@/shared/database/schemas/requests';

export class RequestModal extends ModelBase {
	private modalName: string = 'request';
	private requestModel: Model<IRequest>;

	constructor() {
		super();
		this.requestModel = mongoose.model(this.modalName, RequestSchema);
	}

	@errorHandler
	public async getRequestByCode(code: string): Promise<IRequest | null> {
		return this.requestModel.findOne({ code });
	}

	@errorHandler
	public async insertRequest(code: string, content: string, type: 'TEXT' | 'FILE'): Promise<void> {
		await this.requestModel.create({ code, content, type, createdAt: new Date() });
	}
}
