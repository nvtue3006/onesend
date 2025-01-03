import { ErrorVars } from '@/shared/error/error-vars';
import mongoose from 'mongoose';

export class ModelBase {
	constructor() {
		this.initMongoClient();
	}

	public async initMongoClient(): Promise<void> {
		if (!process.env.DATABASE_URL) {
			throw new Error(ErrorVars.IN001_ENV_MISSING + `[DATABASE_UR]`);
		}

		if (mongoose.connection.readyState !== 0) {
			return;
		}

		await mongoose.connect(process.env.DATABASE_URL, {
			maxPoolSize: 20,
		});
	}
}
