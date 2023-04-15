// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const database = async () => {
    try {
        /**
         * connect to the mongodb server
         */
        // mongoose.set('debug', true)
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            // useFindAndModify: true,
            useUnifiedTopology: true,
        })
        mongoose.connection.on('dissconnted', (refs) => {
            throw new Error('MongoDB is disconnected')
        })
    } catch (error) {
        throw new Error(error)
    }
}
