
const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    "body" in err
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON in request body",
    });
  }

  const statusCode = err.statusCode || err.status || 500;

  return res.status(statusCode).json({
    success: false,
    message:
      statusCode >= 500
        ? "Internal server error"
        : err.message,
    ...(err.errors ? { errors: err.errors } : {}),
  });
};

export default errorHandler;
