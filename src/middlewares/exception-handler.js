export default (error, request, response, next) => {
    if (process.env.DEBUG_MODE !== false) {
        // eslint-disable-next-line no-console
        console.error('Error Name: ', error.name)
        // eslint-disable-next-line no-console
        console.error('Error: ', error)
    }

    switch (error.name) {
        default:
            response.status(500).json({
                message: 'Something went Wrong!',
            })
    }
}

export const asyncHandler = (callback) => {
    return function (request, response, next) {
        return callback(request, response, next).catch(next)
    }
}
