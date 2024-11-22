const authorizeUser = (req, res) => {
    if( req.user && req.user.role === 'User' ){
        return next();
    } else {
        return res.status(403).json({ error: 'Access denied' });
    }
}

export default authorizeUser;