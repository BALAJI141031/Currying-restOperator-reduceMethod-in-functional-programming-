const increase=num=>num+1

const multiplywithNum=num=>num*num

const squareBy5=num=>num**5

const divideby9=num=>num/9


// function compose(...params) {
//    console.log(params)
//   return function (num) {
//     const reductionresult=params.reduce(function (acc,cv) { 
//       if( typeof acc !=="function"){
//        return cv(acc)
//       }else{       
//         return cv(acc(num))
//     }
      
//     })

//     return reductionresult
    
//   }  
// }

// es-6 syntax
 
const compose=(...params)=> num=>params.reduce(reducer=(acc,cv)=> typeof acc !=="function"?cv(acc):cv(acc(num)))

let result=compose(increase,multiplywithNum,squareBy5,divideby9)

console.log(result(2))


