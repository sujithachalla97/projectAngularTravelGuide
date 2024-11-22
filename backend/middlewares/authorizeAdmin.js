const authorizeAdmin = (req, res) => {
    if( req.user && req.user.role === 'Admin' ){
        return next();
    } else {
        return res.status(403).json({ error: 'Access denied' });
    }
}

export default authorizeAdmin;