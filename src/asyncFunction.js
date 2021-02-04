const fun1 = () => {
    return "I am first function"
}
const fun2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( "I am second function after 5 seconds");
        },5000);
    }
    );
    
}
const fun3 = () =>{
    return "I am third function";
}
const callMe = async ()=>{
    const a =  fun1();
    console.log(a);
    const b = await fun2();
    console.log(b)
    const c = fun3();
    console.log(c);
}
callMe();