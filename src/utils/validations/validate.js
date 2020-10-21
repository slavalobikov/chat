

export default ({ isAuth , values, errors}) => {

    const rules = {
        mail: (errors, value) => {
            if (!value) {
                errors.mail = 'Вы не ввели почту';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.mail = 'Ваша почта введенна не коректно';
            }
        },
        password: (errors, value, isAuth) => {
            debugger
            if (!value) {
                errors.password = 'Вы не ввели пароль';
            } else if (!/^(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/i.test(value)) {
                errors.password =  isAuth ? 'Не верно' :'Ваш пароль слишком слабый';
            }
        },
        login: (errors, value, isAuth) => {
            if (!value) {
                errors.login = 'Вы не ввели логин';
            } else if (!/^[a-zA-Z\-]+$/i.test(value)) {
                errors.login = isAuth ? 'Правила для логина нарушены, либо логин уже занят' : 'Правила для логина нарушены';
            }
        }
    };

    Object.keys(values).forEach(key => rules[key] && rules[key](errors , values[key])); // обращения за ютилсами для валидации


    return ({



    })
};

