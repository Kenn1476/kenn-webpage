const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InquirySchema = new Schema({
    date: String,
    agentName: String,
    referenceNumber: String,
    invoiceNumber: Number,
    comment: String,
    reply: String
})

module.exports = mongoose.model('Inquiries', InquirySchema);
