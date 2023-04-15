import { create } from './create.action'
import { get } from './get.action.js'

import { asyncHandler } from '../../middlewares/exception-handler'
module.exports = {
    '/': {
        post: {
            middlewares: [],
            action: asyncHandler(create),
            level: 'public',
        },
        get: {
            middlewares: [],
            action: asyncHandler(get),
            level: 'public',
        },
    },
}
