import mongoose from "mongoose";

const passHost = 'asd12345asd',
databaseName = 'tables';
const dbHost = `mongodb+srv://Haider03A:${passHost}@cluster0.d8q0pkp.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const connectDB = async _ => {
  mongoose.set('strictQuery', true)
  try{
    await mongoose.connect(dbHost)
    console.log('Connecting to DB')
  }catch(err) {
    console.error(err)
  }

}

export default connectDB;