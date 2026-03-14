const authMiddleware = (req, res, next) => {
    const apiKey = req.header('X-API-KEY');
    
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or missing API Key' });
    }
    
    next();
};

module.exports = authMiddleware;
