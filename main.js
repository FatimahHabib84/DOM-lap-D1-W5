// let h1Class = document.getElementsByClassName('h1Class')[0];
// console.log(h1Class)
// h1Class.style.color = "white";
// h1Class.style.backgroundColor = "lightblue"

// let pID = document.getElementById('pID')
// pID.setAttribute('class','pID')

// img = document.getElementsByTagName('img')[0]
// img.src = 'https://cdn-img1.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery'

// ul = document.querySelector('ul')
// for(let i=0 ; i<3 ; i++){
//     let li = document.createElement(`li`)
//     ul.appendChild(li)
//     li.innerText = `${i}`
//     li.style.display = 'inline'
//     li.style.color = 'blue'
//     li.style.border = '1px solid black'
// }
// body = document.getElementsByTagName(`body`)[0]
// table = document.createElement('table')
// table.setAttribute('class','table')
// body.appendChild(table)
// for(let i=0 ; i<2 ; i++){
//     let tr = document.createElement('tr')
//     table.appendChild(tr)
//     for(let j=0 ; j<3 ; j++){
//         let td = document.createElement('td')
//         tr.appendChild(td)
//         td.innerText = `cell [${i}${j}]`
//     }
// }

// ------------------------------------------------------------------------------------------------------------------
// lap 2

let inter = setInterval(moveQube, 100)
function moveQube() {
    let box = document.getElementById('div');
    box.style.top="Math.floor(Math.random() * 100)"+"%";
    box.style.left="Math.round(Math.random() * 100)"+"%";
    box.style.backgroundColor=`expression("rgb(" + Math.floor(Math.random() * 255)+ "," + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ")")`;
    // box.style.backgroundColor="black"
}
function clearInter(){
    clearInterval(inter);
}

