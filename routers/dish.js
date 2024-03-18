const express = require('express')
const fileUpload = require('express-fileupload')
const DishController = require('../controllers/dish')
const DishRouter = express.Router()

DishRouter.get(
    "/:id?",
    (req,resp) => {
        new DishController().read(req.params.id)
        .then(
            (success) => {
                resp.send(success)
            }
        ).catch(
            (err) => {
                resp.send(err)
            }
        )
    }
)
DishRouter.post(
    "/create",
    fileUpload({
        createParentPath:true
    }),
    (req,resp) => {
        new DishController().create(req.body,req.files?.image)
        .then(
            (success) => {
                resp.send(success)
            }
        ).catch(
            (err) => {
                resp.send(err)
            }
        )
    }
)
module.exports = DishRouter;