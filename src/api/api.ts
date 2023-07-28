import axios from '@/plugins/axios'
import { toasts } from '@/plugins/toast'

interface ApiData {}

interface ApiResponse<T extends ApiData> {
    hint: string
    status: 'success' | 'error' | 'warning'
    data: T
}

interface Api<T extends ApiData, U extends ApiData> {
    method: 'get' | 'post'
    path: string
    payload: T
    response: ApiResponse<U>
}

function callApi<T extends ApiData, U extends ApiData>(api: Api<T, U>, silent: boolean = false): U | void {
    let ret: Promise<ApiResponse<U>>
    switch (api.method) {
        case 'get':
            throw 'Get method not implemented yet.'
        case 'post':
            ret = axios.post(api.path, api.payload)
    }
    ret.then((resp: ApiResponse<U>) => {
        if (resp.status == 'success' && !silent) {
            toasts.success(resp.hint)
            return resp.data
        }
        if (resp.status == 'error' && !silent)
            toasts.error(resp.hint)
        if (resp.status == 'warning' && !silent)
            toasts.warning(resp.hint)
    }).catch((err: any) => {
        console.error(err)
        if (!silent)
            toasts.error('网络错误！')
    })
}

export {
    Api,
    ApiData,
    ApiResponse,
    callApi
}