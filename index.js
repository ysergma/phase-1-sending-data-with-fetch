// Add your code here
const BASE_URL="http://localhost:3000";
function submitData(name,email) {
    return fetch("http://localhost:3000/users",{
        method : "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
         },
         body:JSON.stringify( {
            name : `${name}`,
            email: `${email}`,

        }),
         
    })
    
    .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        const id =response.id
        const myd = document.querySelector(".id")
       const div = document.createElement('div');
      // document.textContent = response.id
      console.log(response);
        div.textContent = id
        ///
       // console.log(div);
     myd.append(div)
      })
      .catch(function(error){
        const message = error.message
        const myd = document.querySelector(".id")
        const div = document.createElement('div');
       // document.textContent = response.id
       console.log(error);
         div.textContent = message
         ///
        // console.log(div);
      myd.append(div)
      })

}




document.addEventListener("DOMContentLoaded",submitData)