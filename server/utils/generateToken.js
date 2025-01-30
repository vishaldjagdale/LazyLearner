import jwt from 'jsonwebtoken';

export const generateToken = (res, user, message) => {
    // taking the user id and generating a token from .env file
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

    return res.status(200).cookie("token", token, {
        httpOnly: true,
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000, // setting the time (1) day to the token 
    }).json({
        success: true,
        message,
        user
    })

};