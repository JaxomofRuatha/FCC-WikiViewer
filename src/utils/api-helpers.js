const REQUEST_TIMEOUT_MS = 30000;

const _checkStatus = (res) => {
  if (res.ok) {
    return res[res.status === 204 ? 'text' : 'json']();
  } else if (res.status === 401) {
    throw new Error('Unauthorized');
  } else {
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  }
};

function timedRequest(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request Timeout'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
}

function apiSkeleton(url, options) {
  return new Promise((resolve, reject) => {
    if (!url) reject(new Error('Request url is a required field'));
    if (!options) reject(new Error('Request options is a required field'));
    const reqOptions = {
      mode: 'cors',
      ...options
    };
    timedRequest(REQUEST_TIMEOUT_MS, fetch(url, reqOptions))
      .then(_checkStatus)
      .then(resolve)
      .catch((error) => {
        console.warn(error);
        reject(error);
      });
  });
}

/* async function apiSkeleton(url, options, onRequestSuccess, onRequestFail) {
  if (!url) onRequestFail(new Error('Request url is a required argument'));
  if (!options) {
    onRequestFail(new Error('Request options is a required argument'));
  }
  const reqOptions = {
    mode: 'cors',
    ...options
  };
  const result = await timedRequest(REQUEST_TIMEOUT_MS, fetch(url, reqOptions))
    .then(_checkStatus)
    .then((res) => {
      onRequestSuccess(res);
    })
    .catch((err) => {
      onRequestFail(err);
    });

  console.log('In API skeleton', result);
  return result;
} */

export default apiSkeleton;
