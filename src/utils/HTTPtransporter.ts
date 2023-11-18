enum METHODS {
    GET = 'GET',
    POST =  'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type RequestPayload = {
    [key: string]: string
}

type RequestHeaders = {
    [key: string]: string
}

type RequestOptions = {
    method: METHODS
} & MethodOptions


type MethodOptions = {
    data?: RequestPayload
    headers?: RequestHeaders
    timeout?: number
}


type HTTPMethod = (url: string, options?: MethodOptions) => Promise<unknown>
function queryStringify(data: RequestPayload) {
    if (!data) {
        throw new Error('Data')
    }
    return Object.entries(data).reduce(
        (acc, [key, value], index, arr) =>
            `${acc}${key}=${value}${index < arr.length - 1 ? '&' : ''}`,
        '?'
    )
}



class HTTPTransport {
    public get: HTTPMethod = (url: string, options) => {
        return this.request(url, {...options, method: METHODS.GET }, options && options.timeout)
    }
    public post: HTTPMethod = (url: string, options) => {
        return this.request(url, {...options, method: METHODS.POST }, options && options.timeout)
    }
    public put: HTTPMethod = (url: string, options) => {
        return this.request(url, {...options, method: METHODS.PUT }, options && options.timeout)
    }
    public delete: HTTPMethod = (url: string, options) => {
        return this.request(url, {...options, method: METHODS.DELETE }, options && options.timeout)
    }


    private request(url: string, options: RequestOptions, timeout = 5000) {
        const { headers = {},method, data= {}} = options

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method')
                return
            }
            const xhr = new XMLHttpRequest()
            const checkMethod = method === METHODS.GET

            xhr.open(
                method,
                checkMethod && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            )
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            })

            xhr.onload = function() {
                resolve(xhr);
            }
            xhr.onabort = reject
            xhr.onerror = reject
            xhr.timeout = timeout
            xhr.ontimeout = reject

            if (checkMethod || !data) {
                xhr.send()
            } else {
                xhr.send(data as any);
            }
        })
    }
}
