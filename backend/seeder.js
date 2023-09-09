import mongoose from "mongoose"
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import images from './data/images.js'
import User from './models/userModel.js'
import Image from "./models/imageModel.js"
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async() => {
    try {
       await Image.deleteMany()
       await User.deleteMany()

      const createdUsers = await User.insertMany(users);
      const adminUser = createdUsers[0]._id
      

      const sampleImages = images.map((image) => {
        return{...image, user: adminUser}
      })

      await Image.insertMany(sampleImages)


      console.log('Data Imported'.green.inverse)
      process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}



const destroyData = async() => {
    try {
       await Image.deleteMany()
       await User.deleteMany()

      
      console.log('Data Destroyed'.red.inverse)
      process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}