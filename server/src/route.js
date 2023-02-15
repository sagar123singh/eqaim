const express=require("express")
const router= express.Router()

router.post("/sum",(req,res)=>{
    try {
        let first= req.body.firstNumber;
        let second= req.body.secondNumber
            let carryArray =['_']
            let sumArray = []
            let firstArray = Array.from(String(first))
            let secondArray = Array.from(String(second))
            if(firstArray.length < secondArray.length){
                return "not correct no first no should be greater"
            }
        
            for(let i=1 ; i<=firstArray.length;i++){
                let total = 0
                // console.log(Number(firstArray[firstArray.length -i]) ,Number(secondArray[secondArray.length -i]))
                if(carryArray.length ==1){
                    total = Number(firstArray[firstArray.length -i]) + Number(secondArray[secondArray.length -i])
                }else{
                    console.log(Number(carryArray[carryArray.length - i]))
                    total = (Number(firstArray[firstArray.length -i]) + Number(secondArray[secondArray.length -i])) + Number(carryArray[carryArray.length - i])
                }
                if(isNaN(total) == false){
                    let arrayofdigit = Array.from(String(total))
                    carryArray.unshift(arrayofdigit[0])
                    sumArray.unshift(arrayofdigit[1])
                }else{
                   sumArray.unshift(String(Number(firstArray[firstArray.length - i]) + Number(carryArray[carryArray.length - i])))
                }
                
            }
        
        let carryString = String(carryArray.join(''))
        let sumString = String(sumArray.join(''))
        return res.status(201).json({
            carryString:carryString,
            sumString:sumString
        })
    } catch (error) {
        res.status(500).json({status:true,msg:error.msg})
    }
})

module.exports=router;