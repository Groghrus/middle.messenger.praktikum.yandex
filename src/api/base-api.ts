import HTTPTransport from '../utils/HTTPtransporter.ts';

export default class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }
}
