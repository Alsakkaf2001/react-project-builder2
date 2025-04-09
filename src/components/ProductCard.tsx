import Image from "./Image";
import { IProduct } from "./interfaces";
import Button from "./ui/Button";
import { txtSlicer } from "./utility";

interface IProps{
  product: IProduct
}

function ProductCard({product}:IProps) {
  const{title,description,imageURL,price} = product
  return (
    <div className=" sm:max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-3 flex flex-col gap-1 md:gap-4">
      <Image
        url={imageURL}
        alt={"Product Card "}
      />

      <h3>{title}</h3>
      <p>
        {txtSlicer(description)}
      </p>
      <div className="flex items-center my-3 space-x-2 cursor-pointer ">
        <span className=" w-5 h-5 bg-indigo-600 rounded-full"></span>
        <span className=" w-5 h-5 bg-red-600 rounded-full"></span>
        <span className=" w-5 h-5 bg-green-600 rounded-full"></span>
      </div>
      <div className="flex justify-between items-center ">
        <span>{price}</span>

        <Image
          url={imageURL}
          alt={"Product Card "}
          className={"w-10 h-10 rounded-full object-contain"}
        />
      </div>
      <div className="flex justify-between items-center gap-1 ">
        <Button className="bg-indigo-600 p-2 " width="w-full" onClick={()=>{
            console.log("CLiked")
        }}  >Edit</Button>
        <Button className="bg-red-600 p-2 " width="w-full">Delete</Button>
      </div>
    </div>
  );
}

export default ProductCard;
