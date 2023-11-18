export const validation = (name: string, value: string) => {
    if (name === 'login') {
        return value.match(/^(?=.*[a-zA-Z])[\w-]{3,20}$/)
    }
    if (name === 'email') {
        return value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g)
    }
    if (name === 'password') {
        return value.match(/^(?=\w*[A-Z])(?=\w*\d)\w{8,40}$/)
    }
    if (name === 'phone') {
        return value.match(/(\+7|8)[0-9]{10,15}/ig)
    }
    if (name === 'first_name' || name === 'second_name') {
        const newValue: RegExpMatchArray | null = value.match(/^[A-ZА-ЯЁ]+([A-Za-zА-яЁё]|-)+[A-za-zа-яё]+$/gu)
        if (newValue) {
            return newValue
        }
    }
    if (name === 'display_name' || name === 'message') {
        return value
    }

}
export const formValidation = (form: any, inputs: any, enter:boolean = false) => {
    form?.addEventListener('click', (event: any) => {
        event.preventDefault()
        event.stopPropagation()
        let isError = false
        const formValue: Record<string, string> = {}
        inputs.forEach((input: any) => {
            formValue[input.name] = input.value
            if (!validation(String(input.name), String(input.value))) {
                isError = true
                input.classList.add('error-text')
                return
            }
            input.classList.remove('error-text')
        })
        if (!isError) {
            // console.log('form value', formValue)
            if (formValue.login === 'qwerty' && formValue.password === '1Qwerty1') {
                console.log(formValue)
                window.location.pathname = '/chat'
            }
            if (enter) {
                window.location.pathname = '/chat'
            }
        }
    })

    inputs.forEach((input: any) => {
        input.addEventListener('click', () => {

            if (!input.value) {
                return null
            }
            if (!('name' in input && 'value' in input)) {
                return null
            }

            if (input.value.trim() === '') {
                input.classList.add('error-text')
                return null
            }

            const newValue = validation(String(input.name), String(input.value))
            if (!newValue) {
                input.classList.add('error-text')
                return null
            }
            input.classList.remove('error-text')
            input.value = String(newValue)
        })
    })
}
