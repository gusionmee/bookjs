

class BooksError extends Error{
    constructor(msg,status) {
        super(msg);

        this.statusCode=status;
    }



}
const  createerror=(msg,status)=>{


    return new BooksError(msg,status)
}
module.exports={createerror,BooksError}