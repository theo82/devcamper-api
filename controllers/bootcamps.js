const Bootcamp = require('../models/Bootcamp');

// @desc       Get all bootcamps
// @route      GET /api/v1/bootcamps
// @access     Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: 'Show all bootcamps', hello: req.hello });
};

// @desc       Get single bootcamps
// @route      GET /api/v1/bootcamps/:id
// @access     Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc       Create new bootcamp
// @route      POST /api/v1/bootcamp
// @access     Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  try {
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc       Update new bootcamp
// @route      PUT /api/v1/bootcamp/:id
// @access     Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc       Delete new bootcamp
// @route      DELETE /api/v1/bootcamp/:id
// @access     Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
};
