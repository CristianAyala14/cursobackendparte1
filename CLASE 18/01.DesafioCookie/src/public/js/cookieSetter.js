//aca trabajamos con el front.
const form = document.getElementById("cookieForm")
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const data = new FormData(form);
    const obj = {}
    data.forEach((value, key)=> obj[key]=value)
    fetch("/cookie", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(result => result.json()).then(json => console.log(json))
})

//la funcion 
const getCookie = ()=>{
    console.log(document.cookie)
}