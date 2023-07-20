const router=require("express").Router()
const {getUserPosts,createPost,deletePost, updatePost, getAllPosts}=require("../controllers/postscontroller")


router.get("/getAllPosts",getAllPosts)
router.post("/createPost/:clientId",createPost)
router.get("/allUserPosts/:clientId",getUserPosts)
router.put("/updatePost/:postId",updatePost)
router.delete("/deletePost/:postId",deletePost)




module.exports=router