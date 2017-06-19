
function nombreCompleto(nombre:string, ...losDemasParametros:string[]):string{
    return nombre +  " " + losDemasParametros.join(" ");
}
 window.addEventListener("load", init);
 function init(){
     let body = document.querySelector("body");
     if(body !== undefined && body != null)
     body.innerHTML  = nombreCompleto("Clark", "Joseph", "Kent");
     //document.write(nombreCompleto("Clark", "Joseph", "Kent")) ;
 }

/*window.addEventListener("load", init);

let arreglo:number[]=[1,2,3,4,5,6];
let villanos:string[] = ["Omega Rojo", "d", ];
arreglo.push(10);
console.log(villanos[0].charAt(0));

arreglo.forEach((a)=>console.log(a));

if (typeof(Storage) !== "undefined") {  
    console.log("Existe localstorage");
}else
console.log("NO Existe localstorage");
function init(){
    //localStorage.setItem('LocalStorageKey', "asadasd");

    var formulario = document.querySelector("#todo");
    console.log(formulario.value);
    formulario.value =  localStorage.getItem('LocalStorageKey');
    ///console.log(formulario.value());
}*/