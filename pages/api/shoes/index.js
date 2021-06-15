const { shoes } = require('./data.json');

export default (req, res) => {
    res.status(200).json(shoes)
}