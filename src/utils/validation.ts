export const validation = (name: string, value: string) => {
    if (name === 'login') {
        return value.match(/^(?=.*[a-zA-Z])[\w-]{3,20}$/)
    }
    if (name === 'email') {
        return value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g)
    }
    if (name === 'password' || name === 'oldPassword' || name === 'newPassword') {
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
    if (name === 'display_name') {
        return value
    }

}
