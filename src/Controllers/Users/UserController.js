const { CreateNewUser } = require("../../models/User");

module.exports = {
    async CreateUserRecord(req, res) {
        const { token, bot_token } = req.body;
        try {
            const new_record = await CreateNewUser(token, bot_token);
            return res.status(200).json({
                'response': new_record
            })
        }
        catch (error) {
            console.log(error)
            return res.json({
                "response": error
            })
        }
    }
}