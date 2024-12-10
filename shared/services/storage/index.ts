import { DeleteObjectsCommand, GetObjectCommand, ListObjectsV2Command, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ErrorVars } from '@/shared/error/error-vars';
import { errorHandler } from '@/shared/decorations/error-handler';

export class AwsStorage {
	static instance: AwsStorage;
	private readonly s3Client: S3Client | undefined;
	private readonly bucketName: string | undefined;

	constructor() {
		if (!AwsStorage.instance) {
			this.s3Client = this.initAwsStorageClient();
			this.bucketName = process.env.AWS_BUCKET_NAME;
			AwsStorage.instance = this;
		}

		return AwsStorage.instance;
	}

	@errorHandler
	public async requestDownloadPredUrl(code: string): Promise<string> {
		if (!this.s3Client) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + ` [s3Client]`);
		}

		if (!this.bucketName) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + ` [bucketName]`);
		}

		const keyName = `${code}.zip`;

		const command = new GetObjectCommand({
			Bucket: this.bucketName,
			Key: keyName,
		});

		return await getSignedUrl(this.s3Client, command, { expiresIn: 600 });
	}

	@errorHandler
	public async requestUploadPredUrl(code: string): Promise<string> {
		if (!this.s3Client) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + ` [s3Client]`);
		}

		if (!this.bucketName) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + ` [bucketName]`);
		}

		const keyName = `${code}.zip`;

		const command = new PutObjectCommand({
			Bucket: this.bucketName,
			Key: keyName,
			ContentType: 'application/zip',
		});

		return await getSignedUrl(this.s3Client, command, { expiresIn: 600 });
	}

	@errorHandler
	public async deleteResource(code: string) {
		if (!this.s3Client) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + ` [s3Client]`);
		}

		if (!this.bucketName) {
			throw new Error(ErrorVars.IN002_INSTANCE_NOT_CREATED + ` [bucketName]`);
		}

		const prefix = `${code}.zip`;

		const listCommand = new ListObjectsV2Command({
			Bucket: this.bucketName,
			Prefix: prefix,
		});

		const data = await this.s3Client.send(listCommand);

		if (!data.Contents || (data.Contents && data.Contents.length <= 0)) {
			throw new Error(ErrorVars.BAD001_RESOURCE_NOT_FOUND + ` [CODE: ${code}`);
		}

		const deleteParams = {
			Bucket: this.bucketName,
			Delete: {
				Objects: data.Contents.map((object) => ({ Key: object.Key! })),
			},
		};

		const deleteCommand = new DeleteObjectsCommand(deleteParams);
		await this.s3Client.send(deleteCommand);
	}

	@errorHandler
	private initAwsStorageClient(): S3Client {
		if (!process.env.AWS_REGION || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_BUCKET_NAME) {
			throw new Error(ErrorVars.IN001_ENV_MISSING);
		}

		return new S3Client({
			region: process.env.AWS_REGION,
			credentials: {
				accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
			},
		});
	}
}
