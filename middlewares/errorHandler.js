function errorHandler(err, req, res, next) {
    let status = 500;
    
    if (err.status) {
      status = err.status;
    }
  
    res.status(status).json({
      error: {
        message: err.message || "Internal Server Error"
      }
    });
  }
  
  module.exports = errorHandler;