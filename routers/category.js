const express = require('express')
const CategoryController = require('../controllers/category')

const CategoryRouter = express.Router()

CategoryRouter.get(
    "/:id?",
    (req,resp) => {
        new CategoryController().read(req.params.id)
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
CategoryRouter.post(
    "/create",
    (req,resp) => {
        new CategoryController().create(req.body)
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
module.exports = CategoryRouter;