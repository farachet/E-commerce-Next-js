interface category{
    id:number,
    categoryname:string
}


interface Products{
    id:number,
    productname:string,
    image:string,
    price:number,
    reference:string,
    sellerId:number,
    status:string,
    categoryId:number,
    category:category
}