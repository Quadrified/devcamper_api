const ErrorResponse = require('../utils/errorResponse');
const geocoder = require('../utils/geocoder');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    // *"return"-ing because we have another "res.send()" after this block
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const newBootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    msg: 'Created new bootcamp',
    data: newBootcamp,
  });
});

// @desc    Update new bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    // "return"-ing because we have another "res.send()" after this block
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    msg: `Updated bootcamp`,
    data: bootcamp,
  });
});

// @desc    Delete new bootcamp
// @route   DELTE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    // "return"-ing because we have another "res.send()" after this block
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    msg: `Deleted bootcamp`,
  });
});

// @desc    Get bootcamps within a radius => GeoSpatial Query
// @route   GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access  Private
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get latitude and longitude from geocoder
  const location = await geocoder.geocode(zipcode);
  const latitude = location[0].latitude;
  const longitude = location[0].longitude;

  // Calculate radius using radians
  // Divide distance by radius of Earth
  // Earth Radius = 3,963 miles || 6,378 km
  const radius = distance / 3963;

  const bootcamps = await Bootcamp.find({
    // From MongoDB Docs
    location: {
      $geoWithin: {
        $centerSphere: [[longitude, latitude], radius],
      },
    },
  });

  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
});
