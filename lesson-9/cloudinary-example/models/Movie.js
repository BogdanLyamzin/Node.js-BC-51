import {Schema, model} from "mongoose";

import {handleSaveError, allowUpdateValidate} from "./hooks/index.js";

import {genreList, realeaseDateRegexp} from "../constants/movie-constants.js";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genreList,
        required: true,
    },
    releaseDate: {
        type: String,
        match: realeaseDateRegexp,
        required: true,
    },
    poster: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, {versionKey: false, timestamps: true});

movieSchema.pre("findOneAndUpdate", allowUpdateValidate);

movieSchema.post("save", handleSaveError);

movieSchema.post("findOneAndUpdate", handleSaveError);

const Movie = model("movie", movieSchema);

export default Movie;