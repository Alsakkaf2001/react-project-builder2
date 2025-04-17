export interface IProduct{
    id?:string;
    imageURL:string;
    title:string;
    description:string;
    price:string;
    colors:string[];
    category: {
        name:string;
        imageURL:string;
    };
}

export interface IFromInput{
    id:string;
    name:"imageURL"|"title"|"description"|"price";
    label:string;
    type:string;
}