class ResHelper{

    created(res){
        res.status(201).send({
            success: true,
            message: 'Created',
          });
    }

    successCustom(res,data) {
        res.status(200).send({
          success: true,
          message: "success",
          data: data,
        });
      }

}

export default new ResHelper();