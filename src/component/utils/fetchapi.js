export function Fetchdata(url,email,password){
    

    // return fetch(`https://fakestoreapi.com/products/category/${value}`)
    // .then(res=>res.json())
    // .then(data=>(data))

    return fetch(url,{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            email,
            password,
            returnSecureToken:true
        })
    }).then(async (resp)=>{
        return{
            data:await resp.json(),
    }
    } 
    )
}