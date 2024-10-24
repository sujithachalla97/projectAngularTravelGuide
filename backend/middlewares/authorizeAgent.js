const authorizeAgent = (req, res) => {
    if( req.user && req.user.role === 'Agent' ){
        return next();
    } else {
        return res.status(403).json({ error: 'Access denied' });
    }
}

export default authorizeAgent;