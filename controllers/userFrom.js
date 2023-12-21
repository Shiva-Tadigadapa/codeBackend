import multer from 'multer';
import path from 'path';
import { FormData } from '../models/FormData.js';

// Configure multer to save files to the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

export const processForm = async (req, res) => {
  console.log(req.body);
  try {
    // Create a new FormData document with the received data and the path of the uploaded file
    const formData = new FormData({
      ClubName: req.body.ClubName,
      fullName: req.body.fullName,
      email: req.body.email,
      rollNo: req.body.rollNo,
      year: req.body.year,
      link: req.body.link,
      // file: path.join('uploads', req.file.filename) // req.file.filename is the name of the uploaded file as saved by multer
    });

    // Save the FormData document
    await formData.save().then((result) => {
      console.log(result);
      res.json({ message: 'Form received' });
    }).catch((err) => {
      console.log(err);
    });

  } catch (error) {
    console.error("Error processing form", error);
    res.status(500).json({ message: 'Error processing form' });
  }
};

export const uploadMiddleware = upload.single('file');

export const getdata = async (req, res) => {
  try {
    const formData = await FormData.find();
    res.status(200).json(formData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
