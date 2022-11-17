import usersConnect from '../../../lib/usersConnect';
import { getUsers } from '../../../lib/usersController';

export default async function usersApi(req, res) {
  usersConnect().catch(() => {
    res.status(405).json({ error: 'Error in connecting to users databse' });
  });

  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
