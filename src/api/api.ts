import axios from '@/plugins/axios'
import { toasts } from '@/plugins/toast'
import { TypeAnnotation } from '@/api/type'
import { useUserStore } from '@/store/user'

interface ApiResponse {
    hint: string
    status: 'success' | 'error' | 'warning' | 'token_error'
    data: object
}

interface Api {
    url: string
    method: 'post'
    token: 'must' | 'opt' | 'ignore'
    req: TypeAnnotation
    resp: TypeAnnotation
}

const store = useUserStore()

function callApi(api: Api, data: any, callback: (arg0: object) => void, silent: boolean = false) {
    if (! api.req.match(data)) {
        console.error('Failed to match request.', api, data)
        return undefined
    }

    let headers: {
        token?: string
    } = {}
    switch (api.token) {
        case 'must':
            if (! store.token_exist) {
                toasts.error('请登陆后操作')
                return
            }
            headers.token = store.token
        case 'opt':
            if (store.token_exist)
                headers.token = store.token
    }

    let ret: Promise<ApiResponse>
    switch (api.method) {
        case 'post':
            ret = axios.post(api.url, data, { headers })
    }
    ret.then((response) => {
        let resp: ApiResponse = response.data as ApiResponse

        if (resp.status == 'token_error') {
            toasts.error(resp.hint)
            return
        }
        if (! api.resp.match(resp.data)) {
            console.error('Failed to match response.', api, resp)
            return
        }
        if (resp.status == 'success') {
            if (! silent)
                toasts.success(resp.hint)
            callback(resp.data)
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