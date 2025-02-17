
export const loginRoute = async (req, res) => { 
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            success: false,
            message: "Please provide email and password",
        });
    }
    
}