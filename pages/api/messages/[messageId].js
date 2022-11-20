import usersConnect from "../../../lib/usersConnect";
import {getMessage, createMessage, putMessages,  deleteMessages} from "../../../lib/messagesController";
export default async function usersApi(req, res) {
  usersConnect().catch(() => {
    res.status(405).json({ error: 'Error in connecting to users databse' });
  });

  const { method } = req;

  switch (method) {
    case 'GET':
      getMessage(req, res);
      break;
    case 'PUT':
      putMessages(req, res);
      break;
    case 'POST':
      createMessage(req, res);
      break;
    case 'DELETE':
      deleteMessages(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}