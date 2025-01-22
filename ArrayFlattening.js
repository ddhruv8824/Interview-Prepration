const arr = [1,[2,[3,[4,5]]]]
let n = 2
//[1,2,3,[4,5]]

function flattenArray(arr, n){
    let res = []
        function helper(arr , depth){
                
                for( const val  of arr){
                    if(typeof(val) == 'object' && depth < n){
                            helper(val , depth + 1)
                    }
                    else{
                        res.push(val)
                    }
                }        
                return res
        }
       return  helper(arr , 0)
}
// function flattenArray(arr, n){
//     return arr.reduce((prev , curr)=>{
//             if(typeof(curr) == "object" && n > 0){
//                 prev.push(...flattenArray(curr , n - 1))
//             }
//             else{
//                 prev.push(curr)
//             }
//             return prev
//     }, [])
// }
const output =  flattenArray(arr , n)
console.log(output)