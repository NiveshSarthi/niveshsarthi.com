const Contact = require('../models/Contact');
const emailService = require('../utils/emailService');

exports.submitContactForm = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const newContact = await contact.save();

        // Send Email Notification
        const emailSubject = `New Inquiry: ${req.body.subject || 'General Inquiry'} from ${req.body.name}`;
        const emailHtml = `
            <div style="font-family: 'Montserrat', sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #C5A059; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">New Query Received</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.subject || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Budget</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.budget || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Property Type</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.propertyType || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Location</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.location || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Referral Source</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${req.body.referral || 'N/A'}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 5px solid #C5A059;">
                    <h3 style="margin-top: 0; color: #C5A059;">Message / Vision:</h3>
                    <p>${req.body.message}</p>
                </div>
                <footer style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
                    This inquiry was sent from the Nivesh Sarthi website.
                </footer>
            </div>
        `;

        await emailService.sendEmail({
            subject: emailSubject,
            html: emailHtml
        });

        res.status(201).json({ message: 'Message sent successfully', contact: newContact });
    } catch (error) {
        console.error('Error in submitContactForm:', error);
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
