import { login } from '@api';
import React from 'react';
import { Formik, FormikConfig } from 'formik';
import { LoginValues } from '@types';
import * as yup from 'yup';
import { TextField } from '@components';
import styles from './styles.module.scss';

const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .email('Email is not valid'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/[a-zžųšįėęčą]+/, 'Password must contain at least one lowercase letter')
    .matches(/[A-ZŽŪŲŠĮĖĘČĄ]+/, 'Password must contain at least one uppercase letter'),
});

type LoginFormFormik = FormikConfig<LoginValues>;

export function LoginPage() {
  const [serverErrorMessage, setServerErrorMessage] = React.useState<null | string>(null);

  const handleLogin: LoginFormFormik['onSubmit'] = async ({ email, password }) => {
    try {
      await login({ email, password });
      // Išsaugoti prisijungusio vartotojo duomenis i global state (react | zustand | redux)
      // išsaugoti token'ą į local storage
    } catch (error) {
      if (error instanceof Error) {
        setServerErrorMessage(error.message);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {({
        values, errors, touched, dirty, isValid, isSubmitting,
        handleChange, handleSubmit, handleBlur,
      }) => (
        <div className={styles.loginPage}>
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {serverErrorMessage && (
            <p>
              {serverErrorMessage}
              <button type="button" onClick={() => setServerErrorMessage(null)}>X</button>
            </p>
            )}
            <TextField
              type="email"
              name="email"
              label="Email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" disabled={!dirty || !isValid || isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
