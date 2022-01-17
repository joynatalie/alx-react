import { StyleSheet, css } from 'aphrodite';
import React from 'react';

function Login() {
  return (
    <body className={css(styles.appBody)}>
      <p>
      Login to access the full dashboard
      </p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" className={css(styles.email)} name="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" className={css(styles.password)} name="password" />
      <button type="btn">OK</button>
    </body>
  );
}

const styles = StyleSheet.create({
  appBody: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '3.5rem',
    marginLeft: '2.5rem',
    minHeight: '60vh'
  },

  email: {
    margin: '.40rem'
  },

  password: {
    margin: '.40rem'
  }
});

export default Login;
