import { v4 as uuidv4 } from "uuid";
import {IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "2022 Genesis G70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars as an independent brand only recently. The G70 offers sleek design and top-tier performance.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "500000",
    colors: ["#FF0032", "#25263B", "#FF6E31"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Sony WH-1000XM5 Headphones",
    description:
      "Industry-leading noise cancellation and crystal-clear sound make these headphones a top choice for audiophiles and travelers alike.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "399",
    colors: ["#000000", "#FFFFFF", "#D3D3D3"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Tesla Model Y",
    description:
      "An all-electric compact crossover with impressive range and cutting-edge autonomous driving features.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "65000",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    category: {
      name: "Electric Vehicles",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "IKEA Poäng Armchair",
    description:
      "A timeless Scandinavian design with ergonomic comfort, perfect for any modern living space.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "79",
    colors: ["#8B4513", "#FFFFFF", "#000000"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Apple MacBook Pro 16",
    description:
      "A powerhouse laptop with M2 Max chip, stunning Retina display, and all-day battery life.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "2499",
    colors: ["#A9A9A9", "#000000"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "BMW X5 2023",
    description:
      "A luxurious SUV with powerful engine options and advanced driver-assistance systems.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "62000",
    colors: ["#000080", "#FFFFFF", "#696969"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Samsung QLED 4K TV",
    description:
      "Brilliant colors and sharp details with this 65-inch smart TV, perfect for home entertainment.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "1299",
    colors: ["#000000"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Le Creuset Dutch Oven",
    description:
      "A cast-iron classic for cooking enthusiasts, known for durability and even heat distribution.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "390",
    colors: ["#FF4500", "#00008B", "#FFFFFF"],
    category: {
      name: "Kitchenware",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Nikon Z9 Camera",
    description:
      "A pro-grade mirrorless camera with 8K video and lightning-fast autofocus.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "5500",
    colors: ["#000000"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Eames Lounge Chair",
    description:
      "An iconic mid-century modern chair combining luxury and comfort.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "6000",
    colors: ["#8B4513", "#000000", "#FFFFFF"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Audi Q8 e-tron",
    description:
      "A premium electric SUV with sleek styling and a quiet, powerful ride.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "74000",
    colors: ["#696969", "#000000", "#FFFFFF"],
    category: {
      name: "Electric Vehicles",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Dyson V15 Vacuum",
    description:
      "A cordless vacuum with powerful suction and laser dust detection.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "699",
    colors: ["#FFD700", "#000000"],
    category: {
      name: "Appliances",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Rolex Submariner",
    description:
      "A legendary dive watch with precision engineering and timeless design.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "15000",
    colors: ["#000000", "#FFFFFF", "#FFD700"],
    category: {
      name: "Luxury Watches",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Bose Soundbar 900",
    description:
      "Immersive Dolby Atmos sound in a sleek, compact design.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "899",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Herman Miller Aeron Chair",
    description:
      "An ergonomic office chair designed for ultimate comfort and support.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "1500",
    colors: ["#000000", "#808080"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Porsche 911 Turbo S",
    description:
      "A supercar masterpiece with breathtaking acceleration and iconic design.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "200000",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    category: {
      name: "Luxury Cars",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "KitchenAid Stand Mixer",
    description:
      "A versatile kitchen tool for baking and cooking, loved by professionals and hobbyists.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "429",
    colors: ["#FF0000", "#FFFFFF", "#000000"],
    category: {
      name: "Kitchenware",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "GoPro HERO12 Black",
    description:
      "A rugged action camera with 5.3K video and advanced stabilization.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "399",
    colors: ["#000000"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "West Elm Mid-Century Bed",
    description:
      "A stylish wooden bed frame with a retro-modern aesthetic.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "1299",
    colors: ["#8B4513", "#FFFFFF"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
  {
    id: uuidv4(),
    title: "Rivian R1T",
    description:
      "An all-electric adventure truck with off-road capability and premium features.",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    price: "73000",
    colors: ["#006400", "#000000", "#FFFFFF"],
    category: {
      name: "Electric Vehicles",
      imageURL:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
    },
  },
];

// export const inputData:IFromInput[]=[
//     {
//         id:"title",
//         type:"text",
//         name:"title",
//         label:"Title"
//     },
//     {
//         id:"description",
//         type:"text",
//         name:"description",
//         label:"Description"
//     },
//     {
//         id:"imageURl",
//         type:"text",
//         name:"imageURL",
//         label:"ImageURl"
//     },
//     {
//         id:"price",
//         type:"text",
//         name:"price",
//         label:"Price"
//     },
// ]