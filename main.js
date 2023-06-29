let cal = document.querySelectorAll('.box0')
let bt = document.querySelector('#button1')
let del = document.querySelector('#del')
let cls = document.querySelector('#cls')
let hk
// let result
let string = "";
let abhe= document.querySelector('.childbox')
document.querySelector('.childbox').style.overflow = "hidden"

window.addEventListener('click', (event)=>{
    for(let i =0 ; i<cal.length;++i)
{
    if (event.target.innerHTML===cal[i].innerHTML)
{
    var element = `${event.target.innerHTML}`
    string = `${string}${element}`
    abhe.value = `${string}`
    console.log(`${string}`)
    // console.log(`${eval(string)}`)
}

//     string = abhe.value
}
})
button.addEventListener('click',()=>{
    console.log(`${eval(string)}`)
    abhe.value = `${eval(string)}`
    string = abhe.value
})
del.addEventListener('click',()=>{
    string = string.substring(0,string.length-1);
     abhe.value = string
    
})
cls.addEventListener('click',()=>{
    
    string = ""
    abhe.value = string
    
})
// var x89 = window.matchMedia("(max-width: 700px)")
// x89.addEventListener((x89)=>{
    
//     document.querySelector('#button1').innerHTML = "modon"

// })document.querySelector('#button1').innerHTML = "modon"
window.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter')
    {
        string = abhe.value
      abhe.value = `${eval(string)}`
    }
    else
    {
        string = `${string}${e.key}`
    }
})



