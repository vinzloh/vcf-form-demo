import { mutate } from 'swr';

export const useLogin = () => {
  const postLogin = (isAuthenticated: boolean) => {
    console.log(`postLogin la`);
    const url = '/api/auth';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAuthenticated }),
    }).then(() => {
      mutate([url]);
    });
  };

  return {
    login: () => postLogin(true),
    logout: () => postLogin(false),
  };
};
