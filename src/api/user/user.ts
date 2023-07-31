import { Api } from '@/api/api'
import { Dict, Nothing, Optional, StringVariant, TypeAnnotation } from '@/api/type'

let UserLoginApi: Api = {
    url: '/user/login',
    method: 'post',
    token: 'ignore',
    req: new Dict({
        username: new StringVariant(),
        password: new StringVariant()
    }),
    resp: new Dict({
        token: new Optional(new StringVariant())
    })
}

let UserRegisterApi: Api = {
    url: '/user/register',
    method: 'post',
    token: 'ignore',
    req: new Dict({
        username: new StringVariant(),
        password: new StringVariant()
    }),
    resp: new Nothing()
}

export {
    UserLoginApi,
    UserRegisterApi
}