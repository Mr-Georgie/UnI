import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // your mongodb connection string
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 80000, // Increase timeout to 80 seconds
};

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

class Singleton {
    private static _instance: Singleton;
    private client: MongoClient;
    private clientPromise: Promise<MongoClient>;

    private constructor() {
        this.client = new MongoClient(uri, options);

        try {
            this.clientPromise = this.client.connect();
            if (process.env.NODE_ENV === "development") {
                // In development mode, use a global variable so that the value
                // is preserved across module reloads caused by HMR (Hot Module Replacement).
                global._mongoClientPromise = this.clientPromise;
            }
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            this.clientPromise = Promise.reject(error);
        }
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance.clientPromise;
    }
}
const clientPromise = Singleton.instance;

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
