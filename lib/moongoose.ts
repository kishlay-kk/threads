import mongoose from 'mongoose';

let isConnected = false; //variable to check if mongoose is connected

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); //this is to prevent unknow field query

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URM not found');
    if(isConnected) return console.log('Already connected');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log('MONGO DB connected');
        
    } catch (error) {
        console.log(error);
    }
}