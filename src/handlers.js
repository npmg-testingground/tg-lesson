import Boom from 'boom';
import dateformat from 'dateformat';
import env from './env.config';
import r from './db/config';
import {
  ReplyPromiseResponse
} from './decorators';

class Handlers {
  @ReplyPromiseResponse
  static async getLessonsByClass(request) {
    const { classId: class_id } = request.params;
    const today = dateformat(Date.now(), 'dddd');
    return r.table(env.DB_TABLE_NAME).filter({
      class_id,
      day: today
    })
  }

  @ReplyPromiseResponse
  static async getLesson(request) {
    const { lessonId } = request.params;
    return r.table(env.DB_TABLE_NAME).get(lessonId);
  }

  @ReplyPromiseResponse
  static async createLesson(request) {
    const { payload } = request;
    return r.table(env.DB_TABLE_NAME).insert(
      r.expr(payload).merge({
        createdAt: r.now()
      }),
      // This tells rethinkdb that changes should be return
      {returnChanges: true}
    )
  }

  @ReplyPromiseResponse
  static async putLesson(request) {
    const { lessonId } = request.params;
    const { payload } = request;
    payload.id = lessonId;
    return r.table(env.DB_TABLE_NAME)
    .get(lessonId)
    .replace(payload, {returnChanges: true})
  }

  @ReplyPromiseResponse
  static async patchLesson(request) {
    const { lessonId } = request.params;
    const { payload } = request;
    payload.id = lessonId;
    return r.table(env.DB_TABLE_NAME)
    .get(lessonId)
    .update(payload, {returnChanges: true})
  }

  @ReplyPromiseResponse
  static async deleteLesson(request) {
    const { lessonId } = request.params;
    r.table(env.DB_TABLE_NAME)
      .get(lessonId)
      .delete({returnChanges: true})
  }
}

export default Handlers;
