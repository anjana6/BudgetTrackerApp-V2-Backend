import categoryRepository from "../Repository/category.repository"

class CategoryService{
    createCategory(requestBody){
        return categoryRepository.createCategory(requestBody);
    }

    updateCategory(categoryId,requestBody){
        return categoryRepository.updateCategory(categoryId,requestBody);
    }

    deleteCategory(categoryId){
        return categoryRepository.deleteCategory(categoryId);
    }
}

export default new CategoryService();