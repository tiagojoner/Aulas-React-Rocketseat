// index, show, store, update, destroy
const User = require('../models/User');


module.exports = {
    async store(req, res)  {      // criar sessão
        const { email } = req.body;
        
        let user = await User.findOne({email});

        if (!user) {
            user = await User.create({ email });
        }   

        return res.json(user);
    }

};