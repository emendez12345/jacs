//version 1 de la construccion de la api funcional del GET
/*const button= document.getElementById("button");
button.addEventListener("click",()=>{
   // fetch("http://127.0.0.1:8000/api/usuarios/").then(res=>console.log(res))
   fetch("http://127.0.0.1:8000/api/usuarios/")
   .then((res)=>(res.ok?Promise.resolve(res):Promise.reject(res)))
   //.then((res)=>console.log(res));
   .then((res)=>res.json())
  // .then((res)=>console.log(res))
   .then((res)=>{
       const list=document.getElementById("lista");
       for(const userInfo of res){
           const itemList=document.createElement("li");
           itemList.textContent=`${userInfo.nombre}-${userInfo.estado}`;
           list.appendChild(itemList);
       }
   });
});*/

//version 2 de la construccion de la api de forma organizada

//GET
//POST
function setDatosPost() {

    var myHeaders = new Headers();
    myHeaders.append("account", "10019287");
    myHeaders.append("apiKey", "H9E2OALGWyWmw0goee21ZTI0q1g5Hk");
    myHeaders.append("token", "87bf572d7c8f4ab0b7a13737d1bff32e");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "toNumber": "3147514973",
      "sms": "SMS de prueba Hablame",
      "flash": 0,
      "sc": "890202",
      "request_dlvr_rcpt": 0
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

   return this.httpclient.POST("https://api103.hablame.co/api/sms/v3/send/priority", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
   
  }
