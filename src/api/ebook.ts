import { Api } from "./api";
import { Dict, List, Nothing, NumberVariant, StringVariant } from "./type";

let BookUploadApi: Api = {
    url: '/ebook/upload',
    method: 'post',
    token: 'must',
    req: new Dict({
        remote_url: new StringVariant(),
        name: new StringVariant(),
        description: new StringVariant()
    }),
    // resp: new Dict({
    //     book_id: new NumberVariant()
    // })
    resp: new Nothing()
}

let BookListApi: Api = {
    url: '/ebook/list',
    method: 'post',
    token: 'must',
    req: new Nothing(),
    resp: new List(new Dict({
        name: new StringVariant(),
        description: new StringVariant(),
        url: new StringVariant()
    }))
}

export {
    BookUploadApi,
    BookListApi
}