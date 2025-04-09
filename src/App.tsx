import { useState } from "react";
import { productList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Model from "./components/ui/Model";

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

  const renderProductList = productList.map(product =><ProductCard key={product.id} product={product} />)

  


  return (
    <div className="container mx-auto px-4 py-6">
      <Button className="bg-indigo-600 p-2 w-full" onClick={openModal}>ADD</Button>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderProductList}

      </div>
      <Model isOpen={isOpen}  closeModal={closeModal} title="ADDD A NEW PRODUCT" >
        <div className="flex items-center space-x-2">
        <Button className="bg-indigo-600 p-2 w-full">Submit</Button>
        <Button className="bg-red-600 p-2 w-full">Cancel</Button>
        </div>
      </Model>
    </div>
  );
}

export default App;
