import resHelper from "../Helpers/resHelper";
import categoryService from "../services/category.service";

class CategoryController{
    async createCategory(req,res){
        try {
           await categoryService.createCategory(req.body);
           resHelper.created(res);
        } catch (error) {
            console.log(error)
        }
    }
}

export default CategoryController();