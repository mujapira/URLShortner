import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION)
            console.log("database")
        } catch (err) {
            console.error(err.message)
            process.exit(1)
        }
    }
}

