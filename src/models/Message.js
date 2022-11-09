import { Schema, model } from "mongoose"

const messageSchema = new Schema({
  adult: {
    type: Boolean
  },
  backdrop_path: {
    type: String
  },
  original_language: {
    type: String
  },
  original_title: {
    type: String
  },
  overview: {
    type: String
  },
  poster_path: {
    type: String
  },
  title: {
    type: String
  },
  video: {
    type: Boolean
  },
  vote_average: {
    type: Number
  }
})

export default model("Message", messageSchema)