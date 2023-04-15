import translate from '../../helpers/translate'
import Article from '../../models/article'

export const get = async (request, response) => {
    const data = await Article.find()
    return response.json({
        message: translate('messages', 'general'),
        data,
    })
}
