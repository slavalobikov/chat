import LoginForm from '../components/LoginForm'
import validateFunc from './../../../utils/validations/validate'


import { withFormik } from 'formik';

export default withFormik({
    mapPropsToValues: () => (
        {
            login: '',
            password: '',
           }
    ),


    validate: values => {
        const errors = {};
        validateFunc({isAuth: false, values , errors});






        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'AuthForm',
})(LoginForm);

