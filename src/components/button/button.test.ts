import {
  expect,
} from 'chai';
import sinon from 'sinon';
import Button from './index.ts';

describe('Компонент кнопка', () => {
  it('Проверка на клик', () => {
    const cb = sinon.stub();
    const button = new Button('div', {
      title: 'Добавить',
      className: 'btn btn-second text-white',
      type: 'button',
      attr: {
        class: 'btn-wrapper d-flex justify-c',
      },
      events: {
        click: cb,
      },
    });
    const el = button.getContent();
    el.click();
    expect(cb.calledOnce).to.eq(true);
  });
});
