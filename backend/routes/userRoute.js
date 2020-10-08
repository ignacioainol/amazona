import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/api/users/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Extazys',
            email: "iggnaxios@gmail.com",
            password: '123',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(user);
    } catch (error) {
        res.send({ msg: error.message });
    }
})

export default router;