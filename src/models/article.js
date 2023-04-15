// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose'

const AtricleSchema = new mongoose.Schema(
    {
        userId: { type: String },
        articleLink: { type: String },
        highlights: { type: String },
    },
    { timestamps: true }
)
// Compile model from schema
export default mongoose.model('articles', AtricleSchema)
