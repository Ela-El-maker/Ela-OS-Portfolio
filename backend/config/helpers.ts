import mongoose from 'mongoose';
/**
 * @EXPORTS
 */
export { connectWithDB };

/**
 *Instantiates connection with database
 *@function connectWithDB
 *@instantiates connection with MongoDB
 */
const connectWithDB = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const uri = process.env.DB_URI;
  if (!uri) {
    throw new Error('DB_URI is not set');
  }

  await mongoose.connect(uri);
  console.log('Connected to DB');
};
export default connectWithDB;
