import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik';

export default withFormik({
    mapPropsToValues: () => (
        {
            name: '',
            mail: '',
            password: '',
            passwordRepeat: '',}
      ),


    validate: values => {
        const errors = {};

        if (!values.mail) {
            errors.mail = 'Вы не ввели почту';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
            errors.mail = 'Ваша почта введенна не коректно';
        }
        if (!values.password) {
            errors.password = 'Вы не ввели пароль';
        } else if (!/^(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/i.test(values.password)) {
            errors.password = 'Ваш пароль слишком слабый';
        }

/*
        if (!values.password) {
            errors.password = 'Required';
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i.test(values.password)) {
            errors.password = 'Invalid password address';
        }
*/

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterFrom',
})(RegisterForm);
