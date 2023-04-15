import { check } from 'express-validator'
import { startCase } from 'lodash'
import translate from '../helpers/translate.js'

/** helpers functions **/
export const validate = (field, model) => {
    switch (field) {
        case 'email': {
            return check(field)
                .optional()
                .not()
                .isEmpty()
                .withMessage(
                    translate('validations', 'required', {
                        ':attribute': startCase(field),
                    })
                )
                .isEmail()
                .withMessage(
                    translate('validations', 'valid', {
                        ':attribute': field,
                    })
                )
        }
        case 'password': {
            return check(field)
                .not()
                .isEmpty()
                .withMessage(
                    translate('validations', 'required', {
                        ':attribute': startCase(field),
                    })
                )
                .isLength({ min: 6 })
                .withMessage(translate('validations', 'password.length'))
        }
        case 'confirmPassword': {
            return check(field).custom(
                (confirmPassword, { req, loc, path }) => {
                    if (!confirmPassword) {
                        throw new Error(
                            translate('validations', 'required', {
                                ':attribute': startCase(field),
                            })
                        )
                    } else if (req.body.password !== confirmPassword) {
                        throw new Error(
                            translate('validations', 'password.mismatch')
                        )
                    }
                    return confirmPassword
                }
            )
        }
        case '_id':
        case 'id': {
            return check(field)
                .not()
                .isEmpty()
                .withMessage(
                    translate('validations', 'required', {
                        ':attribute': startCase(field),
                    })
                )
                .isMongoId()
                .withMessage(
                    translate('validations', 'valid', { ':attribute': field })
                )
        }

        case 'role': {
            return check(field)
                .optional()
                .isIn([
                    'data_entry',
                    'external',
                    'zinpro_representative',
                    'admin',
                ])
                .withMessage(
                    translate('validations', 'validOptions', {
                        ':attribute': 'role',
                        ':options':
                            'data_entry, external, zinpro_representative or admin',
                    })
                )
        }
    }
}

export const validateType = (params) => {
    const { field, type, min, max } = params

    switch (type) {
        case 'boolean': {
            return check(field)
                .optional()
                .isBoolean()
                .withMessage(
                    translate('validations', 'boolean', {
                        ':attribute': startCase(field),
                    })
                )
        }
        case 'string': {
            return check(field)
                .optional()
                .isString()
                .withMessage(
                    translate('validations', 'string', {
                        ':attribute': startCase(field),
                    })
                )

                .isLength({ min, max })
                .withMessage(
                    translate('validations', 'length', {
                        ':attribute': ` ${startCase(field)}`,
                        ':min': `${min}`,
                        ':max': `${max}`,
                    })
                )
        }

        case 'number': {
            return check(field)
                .optional()
                .isNumeric()
                .withMessage(
                    translate('validations', 'numeric', {
                        ':attribute': startCase(field),
                    })
                )
                .isInt({ min: 1 })
                .withMessage(
                    translate('validations', 'greaterThan', {
                        ':attribute': startCase(field),
                        ':value': '1',
                    })
                )
        }
        case 'objectId': {
            return check(field)
                .optional()
                .isMongoId()
                .withMessage(
                    translate('validations', 'valid', { ':attribute': field })
                )
        }
    }
}
