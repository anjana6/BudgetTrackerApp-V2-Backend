import categoryRepository from "../Repository/category.repository"

class CategoryService{
    createCategory(userId,requestBody){
        const {category_type,name} = requestBody;
        const body = {
            user_id: userId,
            category_type,
            name
        }
        return categoryRepository.createCategory(body);
    }

    fetchCategory(userId,categoryType){
        return categoryRepository.fetchCategory(userId,categoryType);
    }

    updateCategory(categoryId,requestBody){
        return categoryRepository.updateCategory(categoryId,requestBody);
    }

    deleteCategory(categoryId){
        return categoryRepository.deleteCategory(categoryId);
    }
}

export default new CategoryService();