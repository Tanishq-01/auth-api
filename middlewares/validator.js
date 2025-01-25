const Joi = require('joi')

exports.signupSchema = Joi.object({
  email : Joi.string()
  .min(6)
  .max(60)
  .required().
  email({
    tlds: {allow:['com','net']},
  }),
  password: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
});   

exports.signinSchema = Joi.object({
  email : Joi.string()
  .min(6)
  .max(60)
  .required().
  email({
    tlds: {allow:['com','net']},
  }),
  password: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
});   

exports.acceptCodeSchema = Joi.object({
  email : Joi.string()
  .min(6)
  .max(60)
  .required().
  email({
    tlds: {allow:['com','net']},
  }),
  providedCode : Joi.number().required(),
});

exports.changePasswordSchema = Joi.object({
  oldPassword: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
  newPassword: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$'))
});

exports.acceptFPSchema = Joi.object({
  email : Joi.string()
  .min(6)
  .max(60)
  .required().
  email({
    tlds: {allow:['com','net']},
  }),
  providedCode : Joi.number().required(),
  password: Joi.string()
		.required()
		.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$')),
})

exports.createPostSchema = Joi.object({
  title : Joi.string()
  .min(6)
  .max(60)
  .required(),
  description : Joi.string()
  .min(6)
  .max(60)
  .required(),
  userId: Joi.string().required()
})