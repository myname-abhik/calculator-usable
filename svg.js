let xi
let xii
let xiii
let xiv
let xv 
 let xvi
 let xvii
 let xviii


if (window.matchMedia("(max-width: 400px)").matches) {
    xi = 'M0 360C-52.1 356.3 -104.2 352.6 -133.6 322.4C-162.9 292.2 -169.6 235.5 -204.4 204.4C-239.1 173.2 -302 167.6 -332.6 137.8C-363.2 108 -361.6 54 -360 0L0 0Z'
  xii = 'M0 180C-26 178.2 -52.1 176.3 -66.8 161.2C-81.5 146.1 -84.8 117.8 -102.2 102.2C-119.6 86.6 -151 83.8 -166.3 68.9C-181.6 54 -180.8 27 -180 0L0 0Z'
  xiii = 'M0 -360C47.9 -355.8 95.9 -351.7 137.8 -332.6C179.7 -313.5 215.5 -279.4 243.2 -243.2C270.9 -207 290.5 -168.7 308.6 -127.8C326.7 -86.9 343.3 -43.5 360 0L0 0Z'
  xiv = 'M0 -180C24 -177.9 47.9 -175.8 68.9 -166.3C89.8 -156.7 107.8 -139.7 121.6 -121.6C135.5 -103.5 145.2 -84.4 154.3 -63.9C163.3 -43.5 171.7 -21.7 180 0L0 0Z'
  button = document.querySelector('button')
button.addEventListener('click',()=>{

    // document.querySelector('.box1').innerHTML=`${arr[(Math.floor(Math.random() * (3- 0)) + 0)]}`;
    // document.querySelector('.box1').style.transition ="all 0.5s linear"
    // console.log(`${arr[(Math.floor(Math.random() * (3- 0)) + 0)]}`)
    xv = `<animate
    attributeName = "d" dur = "1s"values = "M0 360C-52.1 356.3 -104.2 352.6 -133.6 322.4C-162.9 292.2 -169.6 235.5 -204.4 204.4C-239.1 173.2 -302 167.6 -332.6 137.8C-363.2 108 -361.6 54 -360 0L0 0Z;M0 360C-51 359.6 -102 359.2 -137.8 332.6C-173.5 306 -193.9 253.1 -213.5 213.5C-233.2 174 -252 147.8 -276.2 114.4C-300.5 81.1 -330.3 40.5 -360 0L0 0Z;M0 360C-52.1 356.3 -104.2 352.6 -133.6 322.4C-162.9 292.2 -169.6 235.5 -204.4 204.4C-239.1 173.2 -302 167.6 -332.6 137.8C-363.2 108 -361.6 54 -360 0L0 0Z;"
    
    >
</animate>`
xvi = `<animate
attributeName = "d" dur = "1s"values = "M0 180C-26 178.2 -52.1 176.3 -66.8 161.2C-81.5 146.1 -84.8 117.8 -102.2 102.2C-119.6 86.6 -151 83.8 -166.3 68.9C-181.6 54 -180.8 27 -180 0L0 0Z;M0 180C-25.5 179.8 -51 179.6 -68.9 166.3C-86.7 153 -97 126.5 -106.8 106.8C-116.6 87 -126 73.9 -138.1 57.2C-150.3 40.5 -165.1 20.3 -180 0L0 0Z;M0 180C-26 178.2 -52.1 176.3 -66.8 161.2C-81.5 146.1 -84.8 117.8 -102.2 102.2C-119.6 86.6 -151 83.8 -166.3 68.9C-181.6 54 -180.8 27 -180 0L0 0Z;"
>
    
</animate>`
xvii = `<animate
attributeName = "d" dur = "1s"values = "M0 -360C47.9 -355.8 95.9 -351.7 137.8 -332.6C179.7 -313.5 215.5 -279.4 243.2 -243.2C270.9 -207 290.5 -168.7 308.6 -127.8C326.7 -86.9 343.3 -43.5 360 0L0 0Z;M0 -360C43 -347.1 85.9 -334.2 132.4 -319.7C178.9 -305.1 229 -289 254.6 -254.6C280.1 -220.2 281.2 -167.5 294.7 -122.1C308.2 -76.6 334.1 -38.3 360 0L0 0Z;M0 -360C47.9 -355.8 95.9 -351.7 137.8 -332.6C179.7 -313.5 215.5 -279.4 243.2 -243.2C270.9 -207 290.5 -168.7 308.6 -127.8C326.7 -86.9 343.3 -43.5 360 0L0 0Z"
>
    
</animate>`
xviii = ` <animate
attributeName = "d" dur = "1s"values = "M0 -180C24 -177.9 47.9 -175.8 68.9 -166.3C89.8 -156.7 107.8 -139.7 121.6 -121.6C135.5 -103.5 145.2 -84.4 154.3 -63.9C163.3 -43.5 171.7 -21.7 180 0L0 0Z;M0 -180C21.5 -173.5 43 -167.1 66.2 -159.8C89.5 -152.6 114.5 -144.5 127.3 -127.3C140.1 -110.1 140.6 -83.8 147.4 -61C154.1 -38.3 167.1 -19.2 180 0L0 0Z"
>
    
</animate>`
document.querySelector('.box1').innerHTML = `<svg id="visual" viewBox="0 0 400 750" width="400" height="750" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="400" height="750" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="70%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="70%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="70%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#001220" stop-opacity="1"></stop><stop offset="70%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(400, 0)"><path d="${xi}" fill="#96446e">${xv}</path><path d="${xii}" fill="#fbae3c"></path>${xvi}</g><g transform="translate(0, 750)"><path d="${xiii}" fill="#96446e">${xvii}</path><path d="${xiv}" fill="#fbae3c">${xviii}</path>`
console.log(xv)

    
    
})

 
 document.querySelector('.box1').innerHTML = `<svg id="visual" viewBox="0 0 400 750" width="400" height="750" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="400" height="750" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="70%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="70%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="70%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" stop-color="#001220" stop-opacity="1"></stop><stop offset="70%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(400, 0)"><path d="M0 360C-51 359.6 -102 359.2 -137.8 332.6C-173.5 306 -193.9 253.1 -213.5 213.5C-233.2 174 -252 147.8 -276.2 114.4C-300.5 81.1 -330.3 40.5 -360 0L0 0Z" fill="#96446e"></path><path d="M0 180C-25.5 179.8 -51 179.6 -68.9 166.3C-86.7 153 -97 126.5 -106.8 106.8C-116.6 87 -126 73.9 -138.1 57.2C-150.3 40.5 -165.1 20.3 -180 0L0 0Z" fill="#fbae3c"></path></g><g transform="translate(0, 750)"><path d="M0 -360C43 -347.1 85.9 -334.2 132.4 -319.7C178.9 -305.1 229 -289 254.6 -254.6C280.1 -220.2 281.2 -167.5 294.7 -122.1C308.2 -76.6 334.1 -38.3 360 0L0 0Z" fill="#96446e"></path><path d="M0 -180C21.5 -173.5 43 -167.1 66.2 -159.8C89.5 -152.6 114.5 -144.5 127.3 -127.3C140.1 -110.1 140.6 -83.8 147.4 -61C154.1 -38.3 167.1 -19.2 180 0L0 0Z" fill="#fbae3c"></path></g></svg>`
  

} 

else{

  xi = 'M0 675C-94.8 672.1 -189.6 669.2 -258.3 623.6C-327 578 -369.6 489.7 -422.1 422.1C-474.7 354.5 -537.3 307.6 -581.1 240.7C-624.9 173.8 -650 86.9 -675 0L0 0Z'
  xii = 'M0 337.5C-47.4 336.1 -94.8 334.6 -129.2 311.8C-163.5 289 -184.8 244.9 -211.1 211.1C-237.4 177.3 -268.7 153.8 -290.6 120.4C-312.5 86.9 -325 43.4 -337.5 0L0 0Z'
  xiii = 'M0 -675C82.3 -654.5 164.6 -634 251 -606.1C337.5 -578.1 428.2 -542.7 477.3 -477.3C526.4 -411.9 533.9 -316.5 559.9 -231.9C585.9 -147.4 630.4 -73.7 675 0L0 0Z'
  xiv = 'M0 -337.5C41.1 -327.3 82.3 -317 125.5 -303C168.8 -289.1 214.1 -271.4 238.6 -238.6C263.2 -205.9 266.9 -158.2 279.9 -116C292.9 -73.7 315.2 -36.8 337.5 0L0 0Z'
  button = document.querySelector('button')
button.addEventListener('click',()=>{

    // document.querySelector('.box1').innerHTML=`${arr[(Math.floor(Math.random() * (3- 0)) + 0)]}`;
    // document.querySelector('.box1').style.transition ="all 0.5s linear"
    // console.log(`${arr[(Math.floor(Math.random() * (3- 0)) + 0)]}`)
    xv = `<animate
    attributeName = "d" dur = "1s"values = "M0 675C-94.8 672.1 -189.6 669.2 -258.3 623.6C-327 578 -369.6 489.7 -422.1 422.1C-474.7 354.5 -537.3 307.6 -581.1 240.7C-624.9 173.8 -650 86.9 -675 0L0 0Z;M0 675C-77.4 642.6 -154.7 610.3 -241.9 583.9C-329 557.5 -425.9 537.2 -477.3 477.3C-528.7 417.4 -534.5 318 -559.9 231.9C-585.2 145.8 -630.1 72.9 -675 0L0 0Z;M0 675C-77.4 642.6 -154.7 610.3 -241.9 583.9C-329 557.5 -425.9 537.2 -477.3 477.3C-528.7 417.4 -534.5 318 -559.9 231.9C-585.2 145.8 -630.1 72.9 -675 0L0 0Z;
    M0 675C-94.8 672.1 -189.6 669.2 -258.3 623.6C-327 578 -369.6 489.7 -422.1 422.1C-474.7 354.5 -537.3 307.6 -581.1 240.7C-624.9 173.8 -650 86.9 -675 0L0 0Z"
    
    >
</animate>`
xvi = `<animate
attributeName = "d" dur = "1s"values = "M0 337.5C-47.4 336.1 -94.8 334.6 -129.2 311.8C-163.5 289 -184.8 244.9 -211.1 211.1C-237.4 177.3 -268.7 153.8 -290.6 120.4C-312.5 86.9 -325 43.4 -337.5 0L0 0Z;M0 337.5C-38.7 321.3 -77.4 305.1 -120.9 291.9C-164.5 278.8 -213 268.6 -238.6 238.6C-264.3 208.7 -267.3 159 -279.9 116C-292.6 72.9 -315.1 36.4 -337.5 0L0 0Z;M0 337.5C-47.4 336.1 -94.8 334.6 -129.2 311.8C-163.5 289 -184.8 244.9 -211.1 211.1C-237.4 177.3 -268.7 153.8 -290.6 120.4C-312.5 86.9 -325 43.4 -337.5 0L0 0Z"
>
    
</animate>`
xvii = `<animate
attributeName = "d" dur = "1s"values = "M0 -675C82.3 -654.5 164.6 -634 251 -606.1C337.5 -578.1 428.2 -542.7 477.3 -477.3C526.4 -411.9 533.9 -316.5 559.9 -231.9C585.9 -147.4 630.4 -73.7 675 0L0 0Z;
M0 -675C95.2 -672.9 190.5 -670.9 258.3 -623.6C326.2 -576.4 366.6 -484 414.4 -414.4C462.1 -344.8 517.1 -297.9 561.7 -232.7C606.4 -167.4 640.7 -83.7 675 0L0 0Z;M0 -675C82.3 -654.5 164.6 -634 251 -606.1C337.5 -578.1 428.2 -542.7 477.3 -477.3C526.4 -411.9 533.9 -316.5 559.9 -231.9C585.9 -147.4 630.4 -73.7 675 0L0 0Z"
>
    
</animate>`
xviii = ` <animate
attributeName = "d" dur = "1s"values = "M0 -337.5C41.1 -327.3 82.3 -317 125.5 -303C168.8 -289.1 214.1 -271.4 238.6 -238.6C263.2 -205.9 266.9 -158.2 279.9 -116C292.9 -73.7 315.2 -36.8 337.5 0L0 0Z;M0 -337.5C47.6 -336.5 95.2 -335.4 129.2 -311.8C163.1 -288.2 183.3 -242 207.2 -207.2C231 -172.4 258.5 -149 280.9 -116.3C303.2 -83.7 320.3 -41.9 337.5 0L0 0Z;M0 -337.5C41.1 -327.3 82.3 -317 125.5 -303C168.8 -289.1 214.1 -271.4 238.6 -238.6C263.2 -205.9 266.9 -158.2 279.9 -116C292.9 -73.7 315.2 -36.8 337.5 0L0 0Z"
>
    
</animate>`
document.querySelector('.box1').innerHTML = `<svg id="visual" viewBox="0 0 1536 750" width="1536" height="750" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1536" height="750" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="51.2%" y1="0%" x2="100%" y2="100%"><stop offset="9.04%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="51.2%" y1="0%" x2="100%" y2="100%"><stop offset="9.04%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="48.8%" y2="100%"><stop offset="9.04%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="48.8%" y2="100%"><stop offset="9.04%" stop-color="#001220" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(1536, 0)"><path d="${xi}" fill="#96446e">${xv}</path><path d="${xii}" fill="#fbae3c">${xvi}</path></g><g transform="translate(0, 750)"><path d="${xiii}" fill="#96446e">${xvii}</path><path d="${xiv}" fill="#fbae3c">${xviii}</path></g></svg>`
console.log(xv)

    
    
})

 
 document.querySelector('.box1').innerHTML = `<svg id="visual" viewBox="0 0 1536 750" width="1536" height="750" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1536" height="750" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="51.2%" y1="0%" x2="100%" y2="100%"><stop offset="9.04%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="51.2%" y1="0%" x2="100%" y2="100%"><stop offset="9.04%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="48.8%" y2="100%"><stop offset="9.04%" stop-color="#fbae3c" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="48.8%" y2="100%"><stop offset="9.04%" stop-color="#001220" stop-opacity="1"></stop><stop offset="90.96000000000001%" stop-color="#fbae3c" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(1536, 0)"><path d="${xi}" fill="#96446e">${xv}</path><path d="${xii}" fill="#fbae3c">${xvi}</path></g><g transform="translate(0, 750)"><path d="${xiii}" fill="#96446e">${xvii}</path><path d="${xiv}" fill="#fbae3c">${xviii}</path></g></svg>`
}
// const arr = [x,y,z,]

const arr = [];
// arr.push(x2)
// arr.push(x3)
// arr.push(x4)
// arr.push(x5)
// const button = document.querySelector('button')
// button.addEventListener('click',()=>{

//     // document.querySelector('.box1').innerHTML=`${arr[(Math.floor(Math.random() * (3- 0)) + 0)]}`;
//     // document.querySelector('.box1').style.transition ="all 0.5s linear"
//     // console.log(`${arr[(Math.floor(Math.random() * (3- 0)) + 0)]}`)
//     xv = `<animate
//     attributeName = "d" dur = "1s"values = "M0 675C-94.8 672.1 -189.6 669.2 -258.3 623.6C-327 578 -369.6 489.7 -422.1 422.1C-474.7 354.5 -537.3 307.6 -581.1 240.7C-624.9 173.8 -650 86.9 -675 0L0 0Z;M0 675C-77.4 642.6 -154.7 610.3 -241.9 583.9C-329 557.5 -425.9 537.2 -477.3 477.3C-528.7 417.4 -534.5 318 -559.9 231.9C-585.2 145.8 -630.1 72.9 -675 0L0 0Z;M0 675C-77.4 642.6 -154.7 610.3 -241.9 583.9C-329 557.5 -425.9 537.2 -477.3 477.3C-528.7 417.4 -534.5 318 -559.9 231.9C-585.2 145.8 -630.1 72.9 -675 0L0 0Z;
//     M0 675C-94.8 672.1 -189.6 669.2 -258.3 623.6C-327 578 -369.6 489.7 -422.1 422.1C-474.7 354.5 -537.3 307.6 -581.1 240.7C-624.9 173.8 -650 86.9 -675 0L0 0Z"
    
//     >
// </animate>`
// console.log("modon")

    
    
// })
// import bc from "./main";
// console.log(`${bc[0]}`);

