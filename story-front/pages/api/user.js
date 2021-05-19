import nc from 'next-connect';
import { sessionMiddleware } from '../../middlewares/session';

export default nc()
  .use(sessionMiddleware)
  .post(async (req, res) => {
    const user = req.session.get('user');

    if (!user) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Not authenticated'
      });
    }

    res.json(user);
  });
