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
        id: new NumberVariant(),
        name: new StringVariant(),
        description: new StringVariant(),
        url: new StringVariant()
    }))
}

let BookInfoApi: Api = {
    url: '/ebook/info',
    method: 'post',
    token: 'ignore',
    req: new Dict({
        bookid: new NumberVariant()
    }),
    resp: new Dict({
        name: new StringVariant(),
        userid: new NumberVariant(),
        url: new StringVariant(),
        description: new StringVariant()
    })
}

export {
    BookUploadApi,
    BookListApi,
    BookInfoApi
}