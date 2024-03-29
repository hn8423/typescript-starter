import * as Joi from 'joi'

export const validationSchema = Joi.object({
    EMAIL_SERVICE: Joi.string().required(),
    EMAIL_AUTH_USER: Joi.string().required(),
    EMAIL_AUTH_PASSWORD: Joi.string().required(),
    EMAIL_BASE: Joi.string().required().uri(),

})

