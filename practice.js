//    textcontent

// const newheading = document.getElementById("heading");
//  console.log(newheading .textContent);

//  newheading.innerHTML = hello friend ; 
// newheading.textContent = "hello friends" ;
// console.log(newheading .textContent);

// innertext
// const newheading = document.getElementById("heading");
// console.log(newheading.innerText)

// text content are used in whole text
//  innertext are used in we can see content on display


// change the style using javascript
// const newheading = document.getElementById("heading");
// newheading.style.color = "pink";
// console.log(newheading)

// get and  set attribute

// const link = document.querySelector("li a")
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://www.cricbuzz.com/cricket-match/live-scores");
// console.log(link.getAttribute("href"));

// get multiple elements using  getElements by class names
// get multiple elements using  queryselector All

// const multiplelements = document.getElementsByTagName("a")
// console.log(multiplelements); //// html collection
    //   for loop
    // for(let i=0;i<multiplelements.length;i++){
    //     const multiple = multiplelements[i];
    //     multiple.style.backgroundColor = "yellow";
    //     multiple.style.color="red"
    // }

    //   for of loop
    // for(let multiplelement of multiplelements){
    // multiplelement.style.backgroundColor = "yellow";
    // multiplelement.style.color="red"
    // }
//   html collection ke sath hum for each method use nahi kar sakte


// const multiplelements = document.querySelectorAll(".system")
// console.log(multiplelements); ///node list
// for loop
// for(let i=0;i<multiplelements.length;i++){
//     const multiple = multiplelements[i];
//     multiple.style.backgroundColor = "yellow";
//     multiple.style.color="red"
// }

//   for of loop
// for(let multiplelement of multiplelements){
// multiplelement.style.backgroundColor = "yellow";
// multiplelement.style.color="red"
// }
// nodelist ke sath hum for each method  bhi use  kar sakte


// innerhtml 

// const changehtml = document.getElementById("heading")
// console.log(changehtml.innerHTML)

// changehtml.innerHTML="<h1>dear parents</h1>";
// console.log(changehtml.innerHTML)


// Dom  tree traverse

// const rootnode = document.getRootNode();
// console.log(rootnode.childNodes[0])
// const htmlelements = rootnode.childNodes[0];
// console.log(htmlelements.childNodes)/
// const bodyelements = htmlelements.childNodes[0];
//  console.log(bodyelements)

// parents relationship
// console.log(bodyelements.parentNode)

// sibling relationship
// console.log(bodyelements.nextSibling)

// const changecolor = document.querySelector("button");
// // console.log(changecolor.parentNode);
//  const todo =changecolor.parentNode;
// console.log(todo)
//  todo.style.backgroundColor = "red";

// add classes in using javascript

// const newclass = document.querySelector(".btn")
// newclass. classList.add('btn-primary');

// const newclass = document.querySelector(".btn")
// newclass. classList.remove('btn-primary');

// toggle
// const newclass = document.querySelector(".btn")
//  newclass. classList.toggle('btn-primary');
//  newclass. classList.toggle('btn-primary');

// document.create Element ()
// 1.append
// 2.prepend
// 3.remove


// append

// const newElement = document.createElement("button")
// newElement.textContent="search me"
// console.log(newElement)
// const newclass = document.querySelector("h2")
// newclass.append(newElement)
// console.log(newclass)

// prepend
// const newElement = document.createElement("button")
// newElement.textContent="search me"
// console.log(newElement)
// const newclass = document.querySelector("h2")
// newclass.prepend(newElement)
// console.log(newclass)


// before

// const newElement = document.createElement("button")
// newElement.textContent="search me"
// console.log(newElement)
// const newclass = document.querySelector("h2")
// newclass.before(newElement)
// console.log(newclass)


// after

// const newElement = document.createElement("button")
// newElement.textContent="search me"
// console.log(newElement)
// const newclass = document.querySelector("h2")
// newclass.after(newElement)
// console.log(newclass)

// normal function me this keyword ki value jo usse call karta vahi hoti
// arrow function me this ki value ek level up hoti hai


// intro to events

// const changecolor = document.querySelectorAll(".color button")
// console.log(changecolor)

//  changecolor.forEach(button=>{
//     button.addEventListener("click",(e)=>{
//       console.log(e.target)
//      e.target.style.color = "#fff";
//      e.target.style.backgroundColor = "#333";
//     })
// })


// const button = document.querySelector("button");
// const body = document.body;
// const value = document.querySelector("span")

// function color(){
//     const red = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const black = Math.floor(Math.random()*256)
//     const randomcolor = `rgb(${red},${green},${black})`
//     return randomcolor;
// }
// for(let i =0; i<=10;i++){
//     button.addEventListener("click",()=>{
//         const cccolor = color();
//         console.log(cccolor)
//         body.style.backgroundColor=cccolor;
//         value.textContent=cccolor;
        
//        },1000)
// }


// key press event

// const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key)
// })

// bubling && capturing

// const child = document.querySelector(".child")
// const parent = document.querySelector(".parent")
// const grandparent= document.querySelector(".grandparent");
// const body = document.body


// child.addEventListener("click",()=>{
//     console.log("hello guys")
// })
// parent.addEventListener("click",()=>{
//     console.log("hello parent")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("hello parent")
// })
// body.addEventListener("click",()=>{
//     console.log("hello parent")
// })

// // capturing


// child.addEventListener("click",()=>{
//     console.log("hello guys capturing")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("hello parent capturing")
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("hello grandparent capturing")
// },true)
// body.addEventListener("click",()=>{
//     console.log("hello body capturing")
// },true)


const form = document.querySelector(".form-todo");
const inputvalue = document.querySelector("form input[type='text']");
const todo = document.querySelector(".addtodo");

form.addEventListener("submit",(e)=>{
e.preventDefault();
const spanvalue = inputvalue.value;
const newelemenst = document.createElement("li")
const newinnerhtml = ` <span>${spanvalue}</span>
                      <div class="button-primary">
                    <button class="btn done ">done</button>
                   <button class="btn remove">remove</button>
                </div>`
 newelemenst.innerHTML=newinnerhtml;
//  console.log(newelemenst)
todo.append(newelemenst)
inputvalue.value="";
 })

 todo.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
     const linethrouh = e.target.parentNode.previousElementSibling;
     linethrouh.style.textDecoration = "line-through";
     console.log(linethrouh)
    }
    if(e.target.classList.contains("remove")){
       const endtodo = e.target.parentNode.parentNode;
       endtodo.remove();
    }

    
 })








  





