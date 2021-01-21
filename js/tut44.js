console.log("This is tutorial 44");

//Pretend this is coming from a server as response
let a = "Harry Bhai";
a = undefined;
if(a!=undefined){
    throw new Error('this is not undefined');
}

else{
    console.log('This is undefined');
}


try {
    
    console.log("We are inside try block");
    functionHarry();
} catch (error) {
    console.log(error)
    console.log("Are you Okay?");
    console.log(error.name);
    console.log(error.message);
}finally {
    console.log("Finally we will run this");
}
