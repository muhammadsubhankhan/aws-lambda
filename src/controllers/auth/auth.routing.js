import { signup } from './signup.action'
import { asyncHandler } from '../../middlewares/exception-handler'
module.exports = {
    signup: {
        post: {
            middlewares: [],
            action: asyncHandler(signup),
            level: 'public',
        },
    },
}
