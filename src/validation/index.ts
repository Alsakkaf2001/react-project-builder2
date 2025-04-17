export const validation = (product: { title: string; description: string; imageURL: string; price: string }) => {
    const errors: { title: string; description: string; imageURL: string; price: string } = {
        title: "",
        description: "",
        imageURL: "",
        price: "",
    };

    if (product.title.length < 10 || !product.title.trim() || product.title.length > 80) {
        errors.title = "Title must be at least 10 characters long.";
    }
    if (product.description.length < 20 || !product.description.trim() || product.description.length > 200) {
        errors.description = "Description must be at least 20 characters long.";
    }
    const validateUrl = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/.test(product.imageURL);
    if (!validateUrl || !product.imageURL.trim()) {
        errors.imageURL = "Image URL must be a valid URL ending with .png, .jpg, .jpeg, or .gif.";
    }
    if (isNaN(Number(product.price)) || Number(product.price) <= 0) {
        errors.price = "Price must be a positive number.";
    }

    return errors;
};