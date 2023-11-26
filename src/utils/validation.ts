/* eslint-disable */
const errorMessage: Record<string, string> = {
  login: 'Поле длинной от 3 до 20 символов,содержит латиницу или цифры, но не состоит из них, без пробелов, без спецсимволов(допустимы дефис и нижнее подчёркивание).',
  email: 'Поле содержит латиницу, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.',
  password: 'Поле длинной от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
  phone: 'Поле длинной от 10 до 15 символов, состоит из цифр, может начинается с плюса.',
  first_name: 'Поле содержит латиницу или кириллицу, первая буква - заглавная, без пробелов и без цифр, нет спецсимволов допустим только дефис.',
  second_name: 'Поле содержит латиницу или кириллицу, первая буква - заглавная, без пробелов и без цифр, нет спецсимволов допустим только дефис.',
  display_name: 'Поле не должно быть пустым.'
}

export const validation = (name: string, value: string) => {
  if (name === 'login') {
    return value.match(/^(?=.*[a-zA-Z])[\w-]{3,20}$/);
  }
  if (name === 'email') {
    return value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g);
  }
  if (name === 'password') {
    return value.match(/^(?=\w*[A-Z])(?=\w*\d)\w{8,40}$/);
  }
  if (name === 'phone') {
    return value.match(/(\+7|8)[0-9]{10,15}/ig);
  }
  if (name === 'first_name' || name === 'second_name') {
    const newValue: RegExpMatchArray | null = value.match(/^[A-ZА-ЯЁ]+([A-Za-zА-яЁё]|-)+[A-za-zа-яё]+$/gu);
    if (newValue) {
      return newValue;
    }
  }
  if (name === 'display_name' || name === 'message') {
    return value;
  }
};

export const formValidation = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
  // @ts-ignore
  const eventTarget = event.target.form as Element;
  const inputs = eventTarget.querySelectorAll('input');
  const formValue: Record<string, string> = {};
  let isError: boolean = false;

  inputs.forEach((input: any) => {
    formValue[input.name] = input.value;
    const validValue = validation(String(input.name), String(input.value));
    const validError = input.parentElement?.querySelector(`#error-text_${input.name}`);
    const errorMsg: HTMLDivElement = document.createElement('div');

    if (!validValue) {
      isError = true;
    }
    commonValid(validValue, validError, errorMsg, input)

  });
  if (!isError) {
    return formValue;
  }
};
export const inputValidation = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const validValue = validation(String(input.name), String(input.value));
  const validError = input.parentElement?.querySelector(`#error-text_${input.name}`);
  const errorMsg: HTMLDivElement = document.createElement('div');

  commonValid(validValue, validError, errorMsg, input)
}

const commonValid = (validValue: any, validError: any, errorMsg: any, input: any ) => {
  if (!validValue && !validError) {
    errorMsg.setAttribute("id", `error-text_${input.name}`);
    errorMsg.classList.add('error-text');
    errorMsg.textContent = errorMessage?.[input.name];
    input.parentElement?.insertBefore(errorMsg, input);
    input.classList.add('error-input');
  }
  if (validValue && validError) {
    input.parentElement?.removeChild(
        input.parentElement.querySelector(`#error-text_${input.name}`) as Node
    );
    input.classList.remove('error-input');
  }
}
