import { ChangeEvent, FormEvent, useState } from "react";
import { productList, inputData } from "./data";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Model from "./components/ui/Model";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { validation } from "./validation";
import ErrorsMessage from "./components/ErrorsMessage";

const App = () => {
  const defultObj ={
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: ""
    },
  }
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defultObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: ""
  });

  // Handlers
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setProduct({ //  // Updating product state
      ...product,
      [name]: value // Updating the specific field
    });
    setErrors({  // Resetting errors on input change
      ...errors,
      [name]: " "
    });
  };
  const onCancel=()=>{
    setProduct(defultObj);
    closeModal()
  }
  const submitHandler =(event: FormEvent<HTMLFormElement>): void =>{
    event.preventDefault();
    const {title, description, imageURL, price} = product;
    const errors = validation({
      title,
      description,
      imageURL,
      price
    })

    const hasErrors = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");
    if(!hasErrors){
      setErrors(errors); // Setting errors state
      return
    }
    console.log("Product added successfully", product);
  }

  // Render functions
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));


  const renderInputList = inputData.map((input) => (
    <div className="flex flex-col p-2" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-2 text-sm font-medium text-gray-700 "
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
        className="text-black mb-2 border-2 border-gray-300 shadow-md focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md px-3 py-3 text-md"
      />
      <ErrorsMessage msg={errors[input.name]} />
    </div>
  ));


  return (
    <div className="container mx-auto px-4 py-6">
      <Button 
        className="bg-indigo-600 p-2 w-full" 
        onClick={openModal}
      >
        Add Product
      </Button>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderProductList}
      </div>

      <Model 
        isOpen={isOpen} 
        closeModal={closeModal} 
        title="Add a New Product"
      >
        <form className="space-y-4" onSubmit={submitHandler}>
          {renderInputList}
          console.log(submitHandler)
          <div className="flex items-center space-x-2">
            <Button className="bg-indigo-600 p-2 w-full">Submit</Button>
            <Button 
              className="bg-gray-400 p-2 w-full" 
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Model>
    </div>
  );
};

export default App;