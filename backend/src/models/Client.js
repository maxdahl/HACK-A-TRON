const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    clientName: String,
    clientEmail: String,
    clientPhone: String,
    clientAddress: String,
    clientFinancials: String,
    registrationNo: String,
    fiscalNo: String,
    Iban: String,
    bankName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
