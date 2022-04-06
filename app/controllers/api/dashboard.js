const debug = require('debug')('dashboard controller');
const userDataMapper = require('../../datamappers/user');
const dashboardDataMapper = require('../../datamappers/dashboard');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {
  async findOneByPk(req, res) {
    debug('dans findOneByPk');
    // check if a user exist in dbb for this email, id in req.params.id
    const user = await userDataMapper.findOneByPk(req.params.id);
    debug(user);
    if (!user) {
      debug('pas de user trouvé pour cet id');
      throw new ApiError('user not found', { statusCode: 404 });
    }
    const dashboard = await dashboardDataMapper.findOneByPk(req.params.id);

    return res.status(200).json(dashboard);
  },
};
