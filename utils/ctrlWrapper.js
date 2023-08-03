const controllerWrapper = (fnController) => {
  const wrapper = async (req, res, next) => {
    try {
      await fnController(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return wrapper;
};

module.exports = controllerWrapper;
