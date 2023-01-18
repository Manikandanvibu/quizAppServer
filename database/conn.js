import mongoose from 'mongoose';

export default async function connect(){
    await mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true})
    console.log("database connected");
}

