import Joi from "joi";

const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': `"title" must be exist`,
        'string.empty': `"title" cannot be empty`,
    }),
    director: Joi.string().required(),
})

export default {
    movieAddSchema,
}