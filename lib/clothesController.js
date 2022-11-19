import Clothes from '../model/Clothes';

export const getClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find({});

    if (!clothes) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(clothes);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Datas' });
  }
};

export const getClothe = async (req, res) => {
  try {
    const { clothesId } = req.query;

    if (clothesId) {
      const user = await Clothes.findById(clothesId);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ error: 'Cannot get the Item!' });
  }
};

export const getUserClothes = async (req, res) => {
  try {
    const {userId} = req.query
    const clothes = await Clothes.find({user: userId});

    if (!clothes) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(clothes);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Datas' });
  }
};

export const getClothesQuery = async (req, res) => {
  const valArr = req.body.val.spli(' ');
  try {
  const clothes = await Clothes.find({ name: { $in: [] } });

    if (!clothes) return res.status(404).json({ error: 'no matches' });
    res.status(200).json(clothes);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Datas' });
  }
};


export const createClothe = async (req, res) => {
  try {
    if (!req.body){
      console.log(req.body)
      res.status(404).json({ error: 'fill in the form' });
    }
    const item = await Clothes.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ error: 'Cannot get the Item!' });
  }
};


export const putClothes = async (req, res) => {
  try {
    const { clothesId } = req.query;
    const formData = req.body;

    if (clothesId && formData) {
      const item = await Clothes.findByIdAndUpdate(clothesId, formData,{new:true});
      res.status(200).json(item);
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while updating Item!' });
  }
};

export const deleteClothes = async (req, res) => {
  try {
    const { clothesId } = req.query;

    if (clothesId) {
      const item = await Clothes.findByIdAndDelete(clothesId);
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Item not found!' });
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while deleting Item!' });
  }
};