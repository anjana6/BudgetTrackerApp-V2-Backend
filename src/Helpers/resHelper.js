class ResHelper{

    created(res){
        res.status(201).send({
            success: true,
            message: 'Created',
          });
    }

}

export default new ResHelper();