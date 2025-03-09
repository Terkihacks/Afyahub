const handleControllerError = (error,res,operation) =>{
    console.error(`Error ${operation}:`, error);
    res.status(500).json({ 
        status: 'error',
        message: `Error ${operation}`,
        error: error.message 
    });
}
module.exports =  handleControllerError;