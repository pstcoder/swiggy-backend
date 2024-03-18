const Category = require('../models/category')

class CategoryController{
    read(id){
        return new Promise(
            async (res,rej) => {
                try{
                    let data = ""
                    if(id){
                        data = await Category.findById(id)
                    }else{
                        data = await Category.find()
                    }
                    res({
                        category : data,
                        msg:"Data found",
                        status:1
                    })
                }catch(err){
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }
    create(data){
        return new Promise(
            (res,rej) => {
                try{
                    const category = new Category({
                        name:data.name,
                        slug:data.slug,
                    })
                    category.save()
                    .then(
                        (success) => {
                            res({
                                msg:"Category added",
                                status:1
                            })
                        }
                    ).catch(
                        (err) => {
                            console.log(err)
                            rej({
                                msg:"Unable to add category",
                                status:0
                            })
                        }
                    )
                }catch(err){
                    console.log(err)
                    rej({
                        msg:"Internal server error",
                        status:0
                    })
                }
            }
        )
    }
}

module.exports = CategoryController;