import translate from '../../helpers/translate'
import Article from '../../models/article'

export const create = async (request, response) => {
    const data = await Article.create(request.body)
    return response.json({
        message: translate('messages', 'success', {
            ':attribute': 'Article has',
            ':action': 'created',
        }),
        data,
    })
}
