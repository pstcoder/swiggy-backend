const Dish = require('../models/dish')


class DishController{
    read(id){
        return new Promise(
            async (res,rej) => {
                try{
                    let data = ""
                    if(id){
                        data = await Dish.findById(id).populate('category')
                    }else{
                        data = await Dish.find().populate('category')
                    }
                    res({
                        dishes : data,
                        msg:"Data found",
                        status:1
                    })
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
    create(data,image){
        return new Promise(
            (res,rej) => {
                try{
                    console.log(image)
                    const imgName = new Date().getTime() + Math.floor(Math.random()*100) + image?.name
                    const destination = './public/images/dish/'+imgName;
                    image.mv(
                        destination,
                        (err) => {
                            if(err){
                                console.log(err)
                                rej({
                                    msg:"Unable to upload files",
                                    status:0
                                })
                            }else{
                                const dish = new Dish({
                                    name:data.name,
                                    slug:data.slug,
                                    price:data.price,
                                    image:imgName,
                                    rating:data.rating,
                                    cooking_time:data.cooking_time,
                                    category:data.category
                                })
                                dish.save()
                                .then(
                                    (success) => {
                                        res({
                                            msg:"Dish added",
                                            status:1
                                        })
                                    }
                                ).catch(
                                    (err) => {
                                        rej({
                                            msg:"Unable to add dish",
                                            status:0
                                        })
                                    }
                                )
                            }
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

module.exports = DishController;