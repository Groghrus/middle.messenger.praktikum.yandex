import HTTPTransport from '../utils/HTTPtransporter.ts';

export default class BaseAPI {
  protected http: HTTPTransport

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint)
  }
  public create?(data: unknown): Promise<unknown>
  public request?(id: string): Promise<unknown>
  public update?(data: unknown, id: string): Promise<unknown>
  public delete?(id: string): Promise<unknown>
}
