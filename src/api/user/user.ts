import { Api } from '@/api/api'
import { Dict, Optional, StringVariant, TypeAnnotation } from '@/api/type'

let UserLoginApi: Api = {
    url: '/user/login',
    method: 'post',
    req: new Dict({
        username: new StringVariant(),
        password: new StringVariant()
    }),
    resp: new Dict({
        token: new Optional(new StringVariant())
    })
}

export {
    UserLoginApi
}