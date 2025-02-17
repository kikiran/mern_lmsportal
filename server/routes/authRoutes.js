
import express from 'express';

const router = express.Router();

router.get("/login", (req, res) => {
    res.status(200).send("Login successful");
});

export default router;