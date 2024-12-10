import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRequest extends Document {
	publicId: string;
	code: string; // 6-digit string
	content: string;
	type: 'FILE' | 'TEXT'; // Enum
	createdAt: Date; // Timestamp
}

// Define the schema
export const RequestSchema: Schema<IRequest> = new Schema(
	{
		publicId: {
			type: String,
			required: true,
			unique: true, // Ensure public ID is unique
			default: () => new mongoose.Types.ObjectId().toHexString(), // Generate a unique string
		},
		code: {
			type: String,
			required: true,
			match: /^[0-9]{6}$/, // Must be exactly 6 digits
			index: true, // Add an index on this field
			unique: true, // Ensure code is unique
		},
		content: {
			type: String,
			required: false, // Optional: Only needed for type "text"
			maxlength: 10000, // Limit content to 10,000 characters
		},
		type: {
			type: String,
			required: true,
			enum: ['FILE', 'TEXT'], // Enum: Only "file" or "text"
		},
		createdAt: {
			type: Date,
			default: Date.now,
			expires: 600, // TTL: Automatically delete after 600 seconds (10 minutes)
		},
	},
	{ collection: 'requests' }, // Optional: Specify collection name
);

// Export the model
const Request: Model<IRequest> = mongoose.models.Request || mongoose.model<IRequest>('Request', RequestSchema);

export default Request;
