const Users = require('../users/user-model');
module.exports = async (req, res, next) => {
    const errors = [];
    function validateNewUser(user) {
        !user.username && errors.push({ username: 'required' });
        !user.password && errors.push({ password: 'required' });
        !user.email && errors.push({ email: 'required' });
        //Validate Char Length
        Object.keys(user).map(x => {
            if (
                x === "password" ||
                x === "username" ||
                x === "email"
            ) {
                const key = user[x].length;
                //Verify Length Min
                if (key < 4 && x) {
                    errors.push({ [x]: "Must be a minimum of 5 chars" });
                }
                //Verify Length Max
                if (key > 50 && x) {
                    errors.push({ [x]: "Must be a maximum of 50 chars" });
                }
                //Validate Email Pattern
                if (x === "email") {
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user[x]) &&
                        errors.push({ error: "Unexpected Email Address" });
                }
            }
        });
    }
    validateNewUser(req.body);
    // Does user exist?
    if (!errors.length) {
        await Users.findById(req.body.username)
            .then(user => user && errors.push({ id: 'User Id already exists!' }));
        // await Users.findByEmail(req.body.email)
        //     .then(email => email && errors.push({ email: 'Email Already Exist!' }));
    }
    // OK we are probably safe to move on send conflict error
    errors.length < 1 ? next() : res.status(409).json({ errors: errors });
}
