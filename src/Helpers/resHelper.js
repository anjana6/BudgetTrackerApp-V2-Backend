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

      unauthorized(res) {
        res.status(405).send({
          success: false,
          message: 'Unauthorized',
          data: null,
        });
      }

      badRequest(res, statusCode, message) {
        res.status(statusCode).send({
          success: false,
          message: message,
          data: null,
        });
      }

}

export default new ResHelper();