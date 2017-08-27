// @flow
/**
 * This file handles the model/models for
 * the perticular microservice
 */

import Joi from 'joi';

export const LessonModel = Joi.object({
  index: Joi.number().integer(),
  day: Joi.string(),
  teacher_id: Joi.string(),
  room_id: Joi.string(),
  class_id: Joi.string(),
  subject_id: Joi.string()
}).required();

export const LessonModelRequired = Joi.object({
  index: Joi.number().integer().required(),
  day: Joi.string().required(),
  teacher_id: Joi.string().required(),
  room_id: Joi.string().required(),
  class_id: Joi.string().required(),
  subject_id: Joi.string().required()
}).required();
