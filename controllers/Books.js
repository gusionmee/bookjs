const {initModels} = require("../model/init-models");

const {createerror}=require('../error/BooksError');


var models = initModels(initModels.db);
const asyncWrapper = require('../middleware/async')


const getallbook = asyncWrapper(async (req, res) => {
    const books = await models.Books.findAll({})
    res.status(200).json({books})


})

const findbook = asyncWrapper(async (req, res,next) => {
    const BookID= req.params.id;
    const Book = await models.Books.findOne({where: {BookID:BookID}});
    if(!Book){
        return next(createerror(`no book width id: ${BookID} `,404))

    }
        res.status(200).json({Book})



})

const createbook = asyncWrapper(async (req, res) => {
    const book = await models.Books.create(req.body)
    res.send((200)).json({book})


})
const deletebook=asyncWrapper(async (req,res)=>{
    const {id:BookID}=req.params;
    const Book=await models.Books.delete({_id:BookID})
    res.status(200).json(Book)
})

module.exports = {
    getallbook,
    findbook,

}