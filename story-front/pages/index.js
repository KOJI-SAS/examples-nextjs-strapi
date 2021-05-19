import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { withSession } from '../middlewares/session';

const HomePage = (props) => {
  const { user } = props;
  const router = useRouter();

  const onLogout = (e) => {
    e.preventDefault();
    axios.post('/api/logout').then(() => {
      router.push('/login')
    })
  }

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <p>Hello {user.username}, have a nice day ! Maybe you want to <a href="/api/logout" onClick={onLogout}>logout ?</a></p>
      ) : (
        <p>
          Hello guest, maybe you want to{' '}
          <Link href="/login">
            <a>login ?</a>
          </Link>
        </p>
      )}
    </div>
  );
};

export const getServerSideProps = withSession((context) => {
  const { req } = context;
  return {
    props: {
      user: req.session.get('user') || null,
    }
  }
})

export default HomePage;
