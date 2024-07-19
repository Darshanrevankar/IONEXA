import UserModel from "../models/userModel.js";

export const autoController = async (req, res, next) => {
    try {
        const { name, phoneNo , amount} = req.body;

        if (!name || !phoneNo) {
            return res.status(400).json({
                success: false,
                message: 'Name and phone number are required.',
            });
        }

        const existingUser = await UserModel.findOne({ $or: [{ name }, { phoneNo }] });

        if (existingUser) {
            return res.status(200).json({
                success: true,
                message: "User already exists",
            });
        }

        const newUser = await UserModel.create({ name, phoneNo, amount });

        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
        });
    } catch (err) {
        console.error('Error in UserController:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
        });
    }
};
