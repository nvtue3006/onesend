import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

class MongoClient {
	private static instance: MongoClient;
	private constructor() {
		this.connect();
	}

	public static getInstance(): MongoClient {
		if (!MongoClient.instance) {
			MongoClient.instance = new MongoClient();
		}
		return MongoClient.instance;
	}

	private async connect(): Promise<void> {
		try {
			if (mongoose.connection.readyState === 0) {
				await mongoose.connect(MONGODB_URI, {
					maxPoolSize: 20,
				});
				console.log("MongoDB connected with pool size 20.");
			}
		} catch (error) {
			console.error("MongoDB connection error:", error);
			throw new Error("Failed to connect to MongoDB");
		}
	}
	
}

export default MongoClient;
