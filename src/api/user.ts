import { Api } from '@/api/api'
import { Dict, Nothing, NumberVariant, Optional, StringVariant } from '@/api/type'

let UserLoginApi: Api = {
    url: '/user/login',
    method: 'post',
    token: 'ignore',
    req: new Dict({
        username: new StringVariant(),
        password: new StringVariant()
    }),
    resp: new Dict({
        token: new Optional(new StringVariant()),
        // userid: new Optional(new NumberVariant())
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