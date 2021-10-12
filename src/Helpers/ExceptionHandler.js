
class Exception extends Error{
    constructor(message,exception) {
      super(message);
      Object.setPrototypeOf(this,exception.prototype);
      
  };
  }
  
  class AlreadyExistException extends Exception{
    constructor(message){
      super(message,AlreadyExistException)
    }
  }
  
  class BadRequestException extends Exception{
    constructor(message){
      super(message,BadRequestException);
    }
  }
  
  export {
    AlreadyExistException,
    BadRequestException
  }