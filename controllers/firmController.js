const Firm = require('../models/Firm');
const Vendor = require('../models/Vendor');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Upload folder
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + Path.extname(file.originalname));
    }
  });
  

  const upload = multer({storage: storage});

const addFirm = async(req, res)=>{
    try{
        const{firmName, area, category, region, offer} = req.body

    const image = req.file? req.file.filename: undefined;

    const vendor = await Vendor.findById(req.vendorId);
    if(!vendor){
        res.status(404).json({message: "vendor not found"})
    }

    const firm = new Firm({
        firmName, area, category, region, offer, image, vendor: vendor._id
    })

    await firm.save();

    return res.status(200).json({message: " Firm added successffully"})
    }catch(error){
        console.error(error)
        res.status(500).json("internal server error")
    }
};

const deleteFirmById = async(req, res)=>{
  try {
    const firmId = req.params.firmId;
    const deleteFirm = await Product.findByIdAndDelete(firmId);

    if(!deleteFirm){
      return res.status(404).json({error: "No product found"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({error:"Internal server error"});
  }
};

module.exports = {addFirm:[upload.single('image'), addFirm], deleteFirmById};