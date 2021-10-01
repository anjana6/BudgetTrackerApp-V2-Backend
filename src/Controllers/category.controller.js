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

    async fetchCategory(req,res){
        try {
            const response = await categoryService.fetchCategory(req.params.categoryType);
            resHelper.successCustom(res,response);
        } catch (error) {
            console.log(error)
        }
    }

    async updateCategory(req,res){
        try {
            const categoryId = req.params.categoryId;
            await categoryService.updateCategory(categoryId,req.body);
            resHelper.created(res);
        } catch (error) {
            console.log(error)
        }
    }

    async deleteCategory(req,res){
        try {
            await categoryService.deleteCategory(req.params.categoryId);
            resHelper.created(res);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new CategoryController();