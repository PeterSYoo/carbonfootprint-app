import usersConnect from "../../../lib/usersConnect";
import {getClothe, putClothes , deleteClothes, createClothe} from "../../../lib/clothesController";

export default async function usersApi(req, res) {
  usersConnect().catch(() => {
    res.status(405).json({ error: 'Error in connecting to users databse' });
  });

  const { method } = req;

  switch (method) {
    case 'GET':
      getClothe(req, res);
      break;
    case 'PUT':
      putClothes(req, res);
      break;
    case 'POST':
      createClothe(req, res);
      break;
    case 'DELETE':
      deleteClothes(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', "PUT", "DELETE", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}