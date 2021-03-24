const heroDB = require('../db/hero');

class HeroController {
  async get(req, res) {
    try {
      let query = 'SELECT * FROM Charas';
      let data = await heroDB.getHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async post(req, res) {
    try {
      let { name, element } = req.body;
      let query = `
      INSERT INTO Charas (name, element) 
      VALUES ('${name}', '${element}')`;
      let data = await heroDB.postHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async put(req, res) {
    try {
      let { name, element } = req.body;
      let query = `
      UPDATE Charas (name, element) 
      SET name = '${name}', element = '${element}'
      where name = '${name}', element = '${element}'`;
      let data = await heroDB.postHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async delete(req, res) {
    try {
      let { name, element } = req.body;
      let query = `
      DELETE from Charas 
      where name = '${name}'`;
      let data = await heroDB.postHero(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new HeroController;
