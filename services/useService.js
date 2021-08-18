const useService = (url, method, body) => {
    return fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        ...body && { body: JSON.stringify(body ? body : {}) }
    }).then(res => res.json())
}

export default useService