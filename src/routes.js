// @flow
import Handlers from './handlers';

import {
	LessonModel,
	LessonModelRequired
} from './db/model';


const routes = [
  {
    method: 'GET',
    path: '/lessons/byclass/{classId}',
    handler: Handlers.getLessonsByClass
  },
  {
    method: 'GET',
    path: '/lessons/{lessonId}',
    handler: Handlers.getLesson
  },
  {
    method: 'POST',
    path: '/lessons',
    handler: Handlers.createLesson,
    config: {
      validate: {
        payload: LessonModelRequired
      }
    }
  },
  {
    method: 'PUT',
    path: '/lessons/{lessonId}',
    handler: Handlers.putLesson,
    config: {
      validate: {
        payload: LessonModelRequired
      }
    }
  },
  {
    method: 'PATCH',
    path: '/lessons/{lessonId}',
    handler: Handlers.patchLesson,
    config: {
      validate: {
        payload: LessonModel
      }
    }
  },
  {
    method: 'DELETE',
    path: '/lessons/{lessonId}',
    handler: Handlers.deleteLesson
  }
]

export default routes;
