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
interface User {
  id?: number,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  image?: string,
  birthday?: string,
  role?: string,
}
interface Posts{
  id:number,
  content:string,
  image:string,
  clientId?:number,
  client:User,
  createdAt:string
}
interface Edit{
  firstName: string,
  lastName: string,
  email: string,
  birthday: string,
}