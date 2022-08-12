import dailyLunchHandler from '../handlers/dailyLunchHandler.js';

const requestAddOrUpdateLunch = async (req, res) => {
  const menu = req.body.menu === '' ? '' : req.body.menu.split(',');
  const date = new Date(req.body.date);
  try {
    if (menu.length < 1) {
      await dailyLunchHandler.deleteLunch(date);
    } else {
      const isUpdated = await dailyLunchHandler.updateLunch({ menu, date });
      if (!isUpdated) {
        await dailyLunchHandler.createNewLunch({ date, menu });
      }
    }
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

const requestFindLunchByDate = async (req, res) => {
  const date = new Date(req.query.date);
  try {
    const data = await dailyLunchHandler.findLunchByDate(date);
    if (data) {
      res.status(200).json({
        status: 'success',
        data: data,
      });
    } else {
      res.status(204).json({
        status: 'success',
        msg: 'no data',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

const dailyLunchController = {
  requestAddOrUpdateLunch,
  requestFindLunchByDate,
};

export default dailyLunchController;
