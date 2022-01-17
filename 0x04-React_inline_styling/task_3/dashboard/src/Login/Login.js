import { StyleSheet, css } from 'aphrodite';
import React from 'react';

function Login() {
  return (
    <body className={css(styles.appBody, styles.under)}>
      <p>
      Login to access the full dashboard
      </p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" className={css(styles.noBox)} name="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" className={css(styles.noBox)} name="password" />
      <button type="btn" className={css(styles.button)}>OK</button>
    </body>
  );
}

const styles = StyleSheet.create({
  appBody: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '3.5rem',
    marginLeft: '2.5rem',
    minHeight: '50vh',
  },
  under: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center'
    }
  },

  noBox: {
    '@media (max-width: 900px)': {
      border: 'none',
    }
  },

  button: {
    '@media (max-width: 900px)': {
      border: '4px solid gold',
      backgroundColor: 'transparent',
      width: '5vw'
    }
  }
});

export default Login;
