const validateEmail = (value: string,) => {
    let error
    if (!value) {
        error = 'Email is Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        error = 'Invalid email address'
    }
    return error
}

const authValidators = { validateEmail }

export default authValidators