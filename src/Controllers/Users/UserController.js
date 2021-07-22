const { CreateNewUser } = require("../../models/User");

module.exports = {
    async CreateUserRecord(req, res) {
        //const { token, bot_token } = req.body;
        try {
            const new_record = await CreateNewUser();
            return res.send("Done")
        }
        catch (error) {
            console.log(error)
            return res.json({
                "response": error
            })
        }
    }
}