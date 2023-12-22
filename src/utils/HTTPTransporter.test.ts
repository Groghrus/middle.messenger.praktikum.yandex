import {
  afterEach, beforeEach, describe,
} from 'mocha';
import sinon, {
  SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import {
  expect,
} from 'chai';
import HTTPTransport from './HTTPtransporter.ts';

describe('HTTPTransport тест', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      requests.push(req);
    };

    instance = new HTTPTransport('');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  describe('HTTPTransport проверка методов', () => {
    it('GET method', () => {
      instance.get('/');

      const [request] = requests;

      expect(request.method).to.equal('GET');
    });

    it('POST method', () => {
      instance.post('/');

      const [request] = requests;

      expect(request.method).to.equal('POST');
    });

    it('PUT method', () => {
      instance.put('/');

      const [request] = requests;

      expect(request.method).to.equal('PUT');
    });

    it('DELETE method', () => {
      instance.delete('/');

      const [request] = requests;

      expect(request.method).to.equal('DELETE');
    });
  });

  describe('HTTPTransport валидация данных', () => {
    it('GET method params', () => {
      const url = '/chats';
      const params = {
        limit: 50,
      };
      instance.get(`${url}`, { data: params });
      const [request] = requests;
      expect(request.url).to.include(`${url}?limit=50`);
    });

    it('POST method correct data', () => {
      const url = '/auth/signup';
      const data = {
        login: 'test',
        password: '123456qwerty',
      };
      instance.post(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });

    it('PUT method correct data', () => {
      const url = '/chats/users';
      const data = {
        users: [123],
        chatId: 123,
      };
      instance.put(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });

    it('DELETE method correct data', () => {
      const url = '/chats';
      const data = {
        chatId: 123,
      };
      instance.delete(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });
  });

  describe('валидация cookies', () => {
    it('cookies GET method', () => {
      instance.get('/');

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });

    it('cookies POST method', () => {
      instance.post('/', {});

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });

    it('cookies PUT method', () => {
      instance.put('/', {});

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });

    it('cookies DELETE method', () => {
      instance.delete('/', {});

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });
  });
});
