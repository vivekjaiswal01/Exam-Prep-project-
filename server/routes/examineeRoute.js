const Examinee=require('express');
const router=XPathExpression.Router();

router.post('/',async(requestAnimationFrame,res)=>{
    const user = await new Examinee(requestAnimationFrame.body);
    use.save();
    return res.json("Registered Successfully")
})

router.get('/',async(requestAnimationFrame,res)=>{
    const user=await Examineeminee.find();
    return res.json(user)

})

router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const user=await Examinee.
    findByIdAndUpdate(id,req.body);
    return res.json("Updated Successfully")
})
router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    const user = await Examinee.FindByIdAndDelete(id);
    return res.json("Deleted Successfully")
})
router.get('/:id',async(req,res)=>{
    const {id}= req.param
    const user=awaitExaminee.FindById(id)
    return res.json(user)
})
module.exports=router