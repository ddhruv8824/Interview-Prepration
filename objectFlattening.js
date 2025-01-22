const input = {
    user: {
      info: {
        name: "Alice",
        age: 25
      },
      preferences: {
        theme: "dark",
        notifications: true
      }
    },
    status: "active"
  };
  
 function flattenObject(input , parent){
            const flatobj = {}
    function helper (obj , parent){
        for(let key in obj){
            const newParent = parent+key
            const value = obj[key]
            if(typeof(value) === "object"){
                helper(value , newParent+".")
            }
            else{
                flatobj[newParent] = value
            }
            
        } 

       
    }
     helper(input, parent)
    return flatobj
 }

 let output = flattenObject(input, "")
 console.log(output)

//  console.log(typeof(input.user));
