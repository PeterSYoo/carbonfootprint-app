import usersConnect from "../../../lib/usersConnect";
import {getMessages,  createMessage, putMessages, deleteMessages} from "../../../lib/messagesController";

export default async function usersApi(req, res) {
  usersConnect().catch(() => {
    res.status(405).json({ error: 'Error in connecting to users databse' });
  });

  const { method } = req;

  switch (method) {
    case 'GET':
      getMessages(req, res);
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
      res.setHeader('Allow', ['GET', "PUT", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}