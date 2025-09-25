import mongoose from 'mongoose';

/**
 * Connect to MongoDB using Mongoose
 */
export async function connectDB(uri) {
  const mongoUri = uri || process.env.MONGO_URI;
  if (!mongoUri) throw new Error('MONGO_URI not set');
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri);
  return mongoose.connection;
}


