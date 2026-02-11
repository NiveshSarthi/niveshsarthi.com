const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        const newContact = await contact.save();
        res.status(201).json({ message: 'Message sent successfully', contact: newContact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
