'use strict';

var allowOnly = function allowOnly(accessLevel, callback) {
    function checkUserRole(req, res) {
        var role = req.user[0].dataValues.role;

        console.log(accessLevel);
        console.log({ role: role, accessLevel: accessLevel });
        if (!(accessLevel & role)) {
            res.status(403).json({ msg: 'You do not have access to this' });
            return;
        }

        callback(req, res);
    }

    return checkUserRole;
};

module.exports = { allowOnly: allowOnly };
//# sourceMappingURL=routesHelper.js.map