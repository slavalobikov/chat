import RegisterForm from '../components/RegisterForm'
import validateFunc from './../../../utils/validations/validate'


import { withFormik } from 'formik';

export default withFormik({
    mapPropsToValues: () => (
        {
            login: '',
            mail: '',
            password: '',
            passwordRepeat: '',}
      ),


    validate: values => {
        const errors = {};

        validateFunc({ isAuth: true, values , errors})


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
