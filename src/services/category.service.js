import categoryRepository from "../Repository/category.repository"

class CategoryService{
    createCategory(requestBody){
        categoryRepository.createCategory(requestBody);
    }
}

export default new CategoryService();