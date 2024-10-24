const authorizeHotelAdmin = (req, res) => {
    if( req.user && req.user.role === 'HotelAdmin' ){
        return next();
    } else {
        return res.status(403).json({ error: 'Access denied' });
    }
}

export default authorizeHotelAdmin;