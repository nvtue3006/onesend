import { errorHandler } from '@/shared/decorations/error-handler';
import { ErrorVars } from '@/shared/error/error-vars';
import crypto from 'crypto';

export class Encryption {
	static instance: Encryption;
	private readonly secret: Buffer | undefined;

	constructor() {
		if (!Encryption.instance) {
			this.secret = this.initEncryptionSecretKey();
			Encryption.instance = this;
		}

		return Encryption.instance;
	}

	@errorHandler
	public async encrypt(text: string) {
		if (!this.secret) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + '[Encryption.secret]');
		}

		const iv = crypto.randomBytes(16);

		const cipher = crypto.createCipheriv('aes-256-cbc', this.secret, iv);

		let encrypted = cipher.update(text, 'utf8', 'hex');
		encrypted += cipher.final('hex');

		return `${iv.toString('hex')}:${encrypted}`;
	}

	@errorHandler
	public async decrypt(text: string) {
		if (!this.secret) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + '[Encryption.secret]');
		}

		const [iv, encrypted] = text.split(':');

		if (!iv || !encrypted) {
			throw new Error(ErrorVars.BAD002_INPUT_NOT_VALID + '[Encryption.decrypt()]');
		}

		const decipher = crypto.createDecipheriv('aes-256-cbc', this.secret, Buffer.from(iv, 'hex'));

		let decrypted = decipher.update(encrypted, 'hex', 'utf8');
		decrypted += decipher.final('utf8');

		return decrypted;
	}

	@errorHandler
	private initEncryptionSecretKey(): Buffer {
		if (!process.env.SECRET_ENCRYPT_KEY) {
			throw new Error(ErrorVars.IN001_ENV_MISSING + '[SECRET_ENCRYPT_KEY]');
		}

		return Buffer.isBuffer(process.env.SECRET_ENCRYPT_KEY)
			? process.env.SECRET_ENCRYPT_KEY
			: crypto
					.createHash('sha256')
					.update(process.env.SECRET_ENCRYPT_KEY || '')
					.digest();
	}
}
