import config from "./config";

export const getAllPost = () => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/post/findAll`,
            {
                method: 'POST',
            },
        )
            .then(result => {
                result = result.json();
                console.log('SUCCESS GET POST FOR USER', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN GETALLPOST ', error);
                reject(error);
            });
    });
};


export const addPost = (fid,title,content,tag) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/post/add?fid=${fid}&topic=${title}&content=${content}&tag=${tag}`,
            {
                method: 'POST',
            },
        )
            .then(result => {
                result = result.json();
                console.log('SUCCESS addPost', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN addPost ', error);
                reject(error);
            });
    });
};


export const setLike = (uid, pid) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/post/like?uid=${uid}&pid=${pid}`,
            {
                method: 'POST',
            },
        )
            .then(result => {
                console.log('SUCCESS GET POST FOR USER', result);
                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN GETALLPOST ', error);
                reject(error);
            });
    });
}