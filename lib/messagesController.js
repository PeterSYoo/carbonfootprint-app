import Messages from "../model/Messages"

export const getMessages = async (req, res) => {
  const owner = req.body.owner
  try {
    const msg = await Messages.find({owner});

    if (!msg) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(msg );
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Datas' });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { messageId } = req.query;

    if (messageId) {
      const msg = await Messages.findById(messageId);
      res.status(200).json(msg);
    }
  } catch (error) {
    res.status(404).json({ error: 'Cannot get the Message!' });
  }
};

export const getRenterMessages = async (req, res) => {
  try {
    const {renterId} = req.query
    const msgs = await Messages.find({renter: renterId});

    if (!msgs) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(msgs);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Datas' });
  }
};


export const createMessage = async (req, res) => {
  try {
    if (!req.body){
      res.status(404).json({ error: 'fill in the form' });
    }
    const item = await Messages.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ error: 'Cannot get the Item!' });
  }
};


export const putMessages = async (req, res) => {
  try {
    const { messageId } = req.query;
    const formData = req.body;

    if (messageId && formData) {
      const item = await Messages.findByIdAndUpdate(messageId, formData,{new:true});
      res.status(200).json(item);
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while updating Item!' });
  }
};

export const deleteMessages = async (req, res) => {
  try {
    const { messageId } = req.query;

    if (messageId) {
      const item = await Messages.findByIdAndDelete(messageId);
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Item not found!' });
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while deleting Item!' });
  }
};