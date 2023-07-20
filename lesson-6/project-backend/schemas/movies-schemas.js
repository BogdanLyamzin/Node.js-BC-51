import Joi from "joi";

import {genreList, realeaseDateRegexp} from "../constants/movie-constants.js";

const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': `"title" must be exist`,
        'string.empty': `"title" cannot be empty`,
    }),
    director: Joi.string().required(),
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genreList).required(),
    releaseDate: Joi.string().pattern(realeaseDateRegexp).required(),
})

const movieUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

export default {
    movieAddSchema,
    movieUpdateFavoriteSchema,
}