import axios from '@/plugins/axios'
import { toasts } from '@/plugins/toast'
import { TypeAnnotation } from '@/api/type'

interface ApiResponse {
    hint: string
    status: 'success' | 'error' | 'warning' | 'token_error'
    data: object
}

interface Api {
    url: string
    method: 'post'
    req: TypeAnnotation
    resp: TypeAnnotation
}

function callApi(api: Api, data: any, silent: boolean): object | undefined {
    if (! api.req.match(data)) {
        console.error('Failed to match request.', api, data)
        return undefined
    }
    let ret: Promise<ApiResponse>
    switch (api.method) {
        case 'post':
            ret = axios.post(api.url, data)
    }
    ret.then((response) => {
        let resp: ApiResponse = response.data as ApiResponse
        if (resp.status == 'token_error') {
            toasts.error(resp.hint)
            return undefined
        }
        if (! api.resp.match(resp.data)) {
            console.error('Failed to match response.', api, resp)
            return undefined
        }
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
    callApi
}