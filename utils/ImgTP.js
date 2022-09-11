import RNFS from "react-native-fs";
import RNFetchBlob from "rn-fetch-blob";

export function dataURLtoFile(dataurl, filename) {
    // 获取到base64编码
    const arr = dataurl.split(',');
    // 将base64编码转为字符串
    const bstr = window.atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n); // 创建初始化为0的，包含length个元素的无符号整型数组
    console.log(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
        type: 'image/jpeg',
    });
}

export function getImageFileFromUrl(url, fileName, callback) {
    console.log('clicked');
    console.log(url);
    RNFS.readFile(url, 'base64').then(res => {
        //console.log(res);
        callback(dataURLtoFile('data:image/gif;base64,' + res, fileName));
    });
}

export const work = file => {
    // let blob = fetch('E:\\SE_Theory_Practice\\red.jpg').then(r => r.blob());
    // let file = window.File([blob], 'testGraph');
    console.log('callback');
    console.log(file.type);
    let REQUEST_URL = 'https://www.imgurl.org/api/v2/upload';

    let parameters = new FormData();
    parameters.append('file', file);
    parameters.append('uid', 'a5732496983d5613f020df18d45cb878');
    parameters.append('token', 'e828ea7902d1d529263fd93d4078e746');

    let res = new Promise(() => {
        RNFetchBlob.fetch(
            'POST',
            REQUEST_URL,
            {
                Authorization: 'Bearer access-token',
                otherHeader: 'foo',
                'Content-Type': 'multipart/form-data',
            },
            [
                {
                    name: 'testgraph',
                    data: {
                        file: file,
                        uid: 'a5732496983d5613f020df18d45cb878',
                        token: 'e828ea7902d1d529263fd93d4078e746',
                    },
                },
            ],
        )
            .then(result => {
                if (result.ok) {
                    console.log(result);
                    result.json().then(obj => {
                        console.log(obj);
                    });
                }
            })
            .catch(error => {
                console.log(error);
                console.log('parse error');
            });
    });
};

export function ImgURL(url) {
    console.log(url);
    let name = url.substring(url.length - 10);
    console.log(name);
    RNFetchBlob.fetch(
        'POST',
        'https://www.imgurl.org/api/v2/upload',
        {
            'Content-Type': 'multipart/form-data',
        },
        [
            {name: 'uid', data: 'a5732496983d5613f020df18d45cb878'},
            {name: 'token', data: 'e828ea7902d1d529263fd93d4078e746'},
            {
                name: 'file',
                filename: name.toString(),
                data: RNFetchBlob.wrap(url),
            },
        ],
    )
        .then(result => {
            console.log(result);
            console.log(result.json());
        })
        .catch(error => {
            console.log(error);
            console.log('parse error');
        });
}
export function ImgTP(url,callback) {
    console.log("ImgTP get uri: ", url);
    // url = 'C:\\Users\\19026\\Desktop\\graphs\\hitman.png';
    let name = url.substring(url.length - 10);
    console.log(url);
    RNFetchBlob.fetch(
        'POST',
        'https://www.imgtp.com/api/upload',
        {
            token: '132b2cc0fb2d717f1ed62ee19e5c5a44',
            'Content-Type': 'multipart/form-data',
        },
        [{name: 'image', filename: name.toString(), data: RNFetchBlob.wrap(url)}],
    )
        .then(result => {
            console.log("ImgTP res", result);
            callback(result.json());
        })
        .catch(error => {
            console.log(error);
            console.log('parse error');
        });
}