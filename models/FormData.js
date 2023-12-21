import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
    ClubName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    rollNo: { type: String, required: true },
    year: { type: String, required: true },
    link: { type: String, required: false },
    file: { type: String, required: false } // This is where you store the path to the uploaded file
});

const FormData = mongoose.model('FormData', formDataSchema);

export { FormData };