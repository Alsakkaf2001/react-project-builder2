import { useState } from "react";
import { productList, inputData } from "./data";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Model from "./components/ui/Model";
import Input from "./components/ui/Input";

function App() {
  // STATE

  const [isOpen, setIsOpen] = useState(false);

  // HANDLER
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /* Renders */

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderInputList = inputData.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id}>{input.name}</label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        className="mb-2 border-2 border-gray-300 shadow-md focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md px-3 py-3 text-md"
      />
    </div>
  ));

  return (
    <div className="container mx-auto px-4 py-6">
      <Button className="bg-indigo-600 p-2 w-full" onClick={openModal}>
        ADD
      </Button>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderProductList}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="ADDD A NEW PRODUCT">
        <div className=" space-x-3 ">
          {renderInputList}
          <div className="flex items-center space-x-2">
            <Button className="bg-indigo-600 p-2 w-full">Submit</Button>
            <Button className="bg-gray-400 p-2 w-full">Cancel</Button>
          </div>
        </div>
      </Model>
    </div>
  );
}

export default App;
