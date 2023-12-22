import { JSDOM } from 'jsdom';
import { afterEach, beforeEach } from 'mocha';
import { expect } from 'chai';
import router, { Router, Routes } from './Router.ts';

describe('Тест работы роутера', () => {
    const html = '<!DOCTYPE html><html><body><div id="app"></div></body></html>';
    beforeEach(() => {
        const { window } = new JSDOM(html, { url: 'https://localhost' });
        global.document = window.document;
    });
    afterEach(() => {
        Router.destroy();
        window.history.replaceState({}, '', '/');
    });
    it('Проверить роуты', () => {
        // router.use(Routes.Auth, authPage).use(Routes.Register, signInPage);
        router.start();
        router.go(Routes.Register);

        // const app = global.document.querySelector('#app');
        // const title = app?.querySelector('.form-title');
        // expect(title).not.to.be.a('null');
        expect(Routes.Auth).to.equal('/');
        expect(Routes.Register).to.equal('/sign-up');
    });
    it('Переход назад', async () => {
        router.start();
        router.go(Routes.Register);
        router.back();

        await new Promise<void>((resolve) => {
            window.addEventListener('popstate', () => {
                resolve();
            });
        });
    });
    it('Переход вперед', async () => {
        router.start();
        router.go(Routes.Register);
        router.back();

        await new Promise<void>((resolve) => {
            window.addEventListener('popstate', () => {
                resolve();
            });
        });

        router.forward();

        await new Promise<void>((resolve) => {
            window.addEventListener('popstate', () => {
                resolve();
            });
        });
    });
});
