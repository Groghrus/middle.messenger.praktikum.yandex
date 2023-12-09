/* eslint-disable */

export const API_URL = 'https://ya-praktikum.tech/api/v2';
enum METHODS {
    GET = 'GET',
    POST = 'POST',
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
    data?: any
    headers?: RequestHeaders
    timeout?: number
}

type HTTPMethod = (url: string, options?: MethodOptions) => Promise<unknown>
function queryStringify(data: RequestPayload) {
  if (!data) {
    throw new Error('Data');
  }
  return Object.entries(data).reduce(
    (acc, [key, value], index, arr) => `${acc}${key}=${value}${index < arr.length - 1 ? '&' : ''}`,
    '?',
  );
}

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }
  public get: HTTPMethod = (url: string, options) => this.request(this.endpoint + url, { ...options, method: METHODS.GET }, options && options.timeout);

  public post: HTTPMethod = (url: string, options) => this.request(this.endpoint + url, { ...options, method: METHODS.POST }, options && options.timeout);

  public put: HTTPMethod = (url: string, options) => this.request(this.endpoint + url, { ...options, method: METHODS.PUT }, options && options.timeout);

  public delete: HTTPMethod = (url: string, options) => this.request(this.endpoint + url, { ...options, method: METHODS.DELETE }, options && options.timeout);

  private request<Response>(url: string, options: RequestOptions, timeout = 5000): Promise<Response> {
    const { headers = {}, method, data = {} } = options;
    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }
      const xhr = new XMLHttpRequest();
      const checkMethod = method === METHODS.GET;

      xhr.open(
        method,
        checkMethod && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onabort = () => reject(new Error('Abort'));
      xhr.onerror = () => reject(new Error('Network Error'));
      xhr.timeout = timeout;
      xhr.ontimeout = () => reject(new Error('Timeout'));


      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (checkMethod || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        console.log('form data', data)
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
