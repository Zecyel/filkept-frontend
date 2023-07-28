import axios from '@/plugins/axios'
import { Api, ApiData } from '@/api/api'

interface UserLoginReq extends ApiData {
    username: string,
    password: string
}

interface UserLoginResp extends ApiData {
    token: string
}

interface UserLoginApi extends Api<UserLoginReq, UserLoginResp> {
    method: string = 'post',
    path: string = '/user/login'
}

export {
    UserLoginApi
}