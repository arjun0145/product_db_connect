import mongoose from 'mongoose'
import 'dotenv/config'

export async function configureDb(){
    try {

     const g = await mongoose.connect(process.env.SERVER_URL)
        console.log("connected ")
        
    } catch (error) {

        console.log('not connected');
        
    }
}