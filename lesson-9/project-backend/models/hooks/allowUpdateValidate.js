const allowUpdateValidate = function(next){
    this.options.runValidators = true;
    next();
}

export default allowUpdateValidate;