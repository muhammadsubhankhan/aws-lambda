import { intersection } from 'lodash'
/**
 * This function is a middleware function that checks whether
 * the user has the necessary scopes to access a protected resource.
 * The function takes a list of scopes as arguments and returns a
 * new middleware function that can be used to protect a route.
 * This function can be used to protect routes that require specific
 * scopes, ensuring that only authenticated users with the required
 * permissions are able to access the protected resource.
 * @param {string} scopes - The name of a scope.
 * @returns {Object} it will return next().
 */
export default (...scopes) => {
    return (request, response, next) => {
        if (!intersection(scopes, request.authInfo.scopes).length) {
            return response.status(403).send('Forbidden')
        }
        return next()
    }
}
