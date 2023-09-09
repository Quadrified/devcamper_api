// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, error: null, msg: 'Show all bootcamps' });
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    error: null,
    msg: `Showing bootcamps ${req.params.id}`,
  });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({
    success: true,
    error: null,
    msg: 'Create new bootcamps',
  });
};

// @desc    Update new bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    error: null,
    msg: `Update bootcamps ${req.params.id}`,
  });
};

// @desc    Delete new bootcamp
// @route   DELTE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    error: null,
    msg: `Delete bootcamps ${req.params.id}`,
  });
};
