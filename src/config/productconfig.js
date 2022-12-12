import mongoose from 'mongoose'

export async function configureDb(){
    try {

        await mongoose.connect('mongodb://localhost:27017/manohar')
        console.log("connected ")
        
    } catch (error) {

        console.log('not connected');
        
    }
}