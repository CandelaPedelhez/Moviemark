const { Router } = require('express');
const router = Router();
const {getAdmin, getAllAdmin} = require("../controllers/admin/getAdmins.js");

router.get('/:id', getAdmin);
router.get('/:id/all', getAdmin, getAllAdmin);

module.exports = router;