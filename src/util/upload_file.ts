import axios from "@/plugins/axios"
import CryptoJS from 'crypto-js'

async function upload_file(file: File): Promise<string> {
    const formData = new FormData()
    formData.append('files', file)
    const response = await axios.post(
      'https://filesoss.yunzuoye.net/XHFileServer/file/upload/CA107011/',
      formData,
      {
        headers: {
          'XueHai-MD5': await fileMD5(file)
        }
      }
    )
    console.log(response.data['uploadFileDTO']['fileId'])
    return response.data['uploadFileDTO']['fileId']
}

async function fileMD5(file: File): Promise<string> {
    return CryptoJS.MD5(ArrayBufferToWordArray(await file.arrayBuffer())).toString()
}

function ArrayBufferToWordArray(arrayBuffer: ArrayBuffer | Uint8Array) {
    let u8: Uint8Array
    if (arrayBuffer instanceof ArrayBuffer)
      u8 = new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength)
    else u8 = arrayBuffer
    const len = u8.length
    const words: any[] = []
    for (let i = 0; i < len; i += 1) {
      words[i >>> 2] |= (u8[i] & 0xff) << (24 - (i % 4) * 8)
    }
    return CryptoJS.lib.WordArray.create(words, len)
  }

export {
  upload_file
}