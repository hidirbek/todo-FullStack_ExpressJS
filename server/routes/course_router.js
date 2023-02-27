const { Router } = require("express");
const TodoCtrl = require("../controller/todo_controller");
const authMid = require("../middleware/auth_middleware");

let router = Router();

router.get("/todos", TodoCtrl.GET);
router.post("/todos", TodoCtrl.CREATE);
router.put("/todos/:id", TodoCtrl.UPDATE);
router.delete("/delete_todo/:id", TodoCtrl.DELETE);

module.exports = router;
