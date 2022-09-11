import config from "./config";

// addFootPrint 为当前用户（uid）添加足迹
export const addFootPrint = (uid, trid, date, location, centerLongitude, centerLatitude, zoom) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/add?uid=${uid}&trid=${trid}&date=${date}&location=${location}&centerLongitude=${centerLongitude}&centerLatitude=${centerLatitude}&zoom=${zoom}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.text())
            .then(result => {
                console.log('SUCCESS IN addFootPrint ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN addFootPrint ', error);
                reject(error);
            });
    });
};

//根据用户id(uid)查询用户所有的足迹(返回trid数组)
export const getTridByUid = (uid) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/findByUid?uid=${uid}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN getTridByUid ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN getTridByUid ', error);
                reject(error);
            });
    });
};

// findByUidAndLocation 根据用户id(uid)和给定地点筛选用户的足迹(返回 trace 数组)
export const getTraceByUidAndLocation = (uid, location) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/findByUidAndLocation?uid=${uid}&location=${location}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN getTraceByUidAndLocation ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN getTraceByUidAndLocation ', error);
                reject(error);
            });
    });
};

// findByUidAndDatePeriodAndLocation 根据用户id(uid)和给定时间区间和地点筛选用户的足迹(返回 trace 数组)
export const getTraceByUidAndDatePeriodAndLocation = (uid, dateStart, dateEnd, location) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/findByUidAndDatePeriodAndLocation?uid=${uid}&dateStart=${dateStart}&dateEnd=${dateEnd}&location=${location}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN getTraceByUidAndDatePeriodAndLocation ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN getTraceByUidAndDatePeriodAndLocation ', error);
                reject(error);
            });
    });
};

// findByUidAndDatePeriod 根据用户id(uid)和给定时间区间筛选用户的足迹(返回 trace 数组)
export const getTraceByUidAndDatePeriod = (uid, dateStart, dateEnd) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/findByUidAndDatePeriod?uid=${uid}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN getTraceByUidAndDatePeriod ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN getTraceByUidAndDatePeriod ', error);
                reject(error);
            });
    });
};

// /footprint/picture/add
// addPictureToFootprint
export const addPictureToFootprint = (fid, latitude, longitude, pictureUrl) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/picture/add?fid=${fid}&latitude=${latitude}&longitude=${longitude}&pictureUrl=${pictureUrl}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN addPictureToFootprint ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN addPictureToFootprint ', error);
                reject(error);
            });
    });
};


// /footprint/picture/findByFid
// getPictureUrlByFid
export const getPictureUrlByFid = (fid) => {
    return new Promise(function (resolve, reject) {
        fetch(
            `${config.backendUrl}/footprint/picture/findAllByFid?fid=${fid}`,
            {
                method: 'POST',
            },
        )
            .then(response => response.json())
            .then(result => {
                console.log('SUCCESS IN getPictureUrlByFid ', result);

                resolve(result);
            })
            .catch(error => {
                console.log('ERROR IN getPictureUrlByFid ', error);
                reject(error);
            });
    });
};