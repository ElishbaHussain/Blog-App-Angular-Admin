export interface Post {
    title: string,
    permalink:string,
    category:{
        id:string,
    name:string},
    postImgPath:string,
    excerpt:string,
    content:string,
    isFeatured:boolean,
    views:number,
    status:string,
    createAt:Date

}
