export default {
    default: 'Whoops, looks like something went wrong',
    notFound: 'Record does not exist',
    unauthorized: 'unauthorized',
    token_expired: 'Token expired or token already used',
    resetPassword: {
        tokenAlreadyUser: 'Sorry! We cannot not process your request.',
        notFound:
            'There is no user record corresponding to this identifier. The user may have been deleted.',
    },
    credentials: {
        invalid:
            'Incorrect username or password. Try again, select Forgot Password or contact your Zinpro Representative.',
        invalid_password:
            'You have entered an invalid current password! Please try again',
        password_not_matched:
            'Password and confirm password fields did not matched! Please try again',
    },
    login: {
        error: 'The server encountered a temporary error and could not complete your request. Please try again in 30 seconds!',
    },
    logout: {
        error: 'Whoops. Something went wrong!',
        invalid: 'Whoops. Something went wrong!',
    },

    user: {
        exist: 'Email already exist',
        not_exists:
            'Your provided email address is not valid. Please contact the administrator',
    },
    reset: {
        invalid: 'The provided email is not registered',
        error: 'Whoops. Something went wrong!',
        expired:
            'Please reset your password again because your link has been expired',
    },
}
