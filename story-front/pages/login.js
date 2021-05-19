import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    axios.post('/api/login', body).then((user) => {
      console.log(user);
      router.push('/');
    });
  }
  return (
    <div>
      <h1>Login to your account</h1>
      <form method="post" action="/api/login" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="test@test.fr" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="********" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage;
