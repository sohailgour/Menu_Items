const arr = [
    {
        title:"Vegetable Korma",
        para:"Mixed vegetables cooked in a creamy sauce with nuts and spices",
        imageUrl:"./images/vegetable-korma.webp",
        category:"lunch"
    },
    {
        title:"Saag Aloo",
        para:"Spinach curry with potatoes and spices",
        imageUrl:"./images/sag-aloo.webp",
        category:"lunch"
    },
    {
        title:"Baingan Bharta",
        para:"Roasted eggplant mash with onions, garlic, and spices",
        imageUrl:"./images/baigan-bharta.webp",
        category:"lunch"
    },
    {
        title:"Mattar Paneer",
        para:"Peas and paneer in a creamy tomato sauce",
        imageUrl:"./images/matar-paneer.webp",
        category:"lunch"
        
    },
    {
        title:"Gajar Ka Halwa",
        para:"Carrot pudding with nuts and cardamom",
        imageUrl:"./images/gajar-ka-halwa.webp",
        category:"snacks"
    },
    {
        title:"Gulab Jamun",
        para:"Deep-fried dumplings soaked in a sweet syrup flavored with rosewater and cardamom",
        imageUrl:"./images/gulab-jamun.webp",
        category:"breakfast"
    },
    {
        title:"Kulfi",
        para:"Indian-style ice cream flavored with cardamom, saffron, or other spices",
        imageUrl:"./images/dry-fruits-kulfi.webp",
        category:"snacks"
    },
    {
        title:"Jalebi",
        para:"Crispy, fermented batter fried and soaked in syrup",
        imageUrl:"./images/imarti.webp",
        category:"snacks"
    },
    {
        title:"Ras Malai",
        para:"Creamy paneer dessert soaked in a sweet syrup with cardamom and nuts",
        imageUrl:"./images/ras-malai.webp",
        category:"snacks"
    },
    {
        title:"Lassi",
        para:"Yogurt-based drink with spices and herbs, often served sweet or salty",
        imageUrl:"./images/lassi.webp",
        category:"breakfast"
    },
    {
        title:"Chai",
        para:"Spiced tea with black tea leaves, milk, and sugar",
        imageUrl:"./images/masala-tea-chai.webp",
        category:"breakfast"
    },
    {
        title:"Nimbu Pani",
        para:"Lemonade with spices and herbs",
        imageUrl:"./images/nimbupani.webp",
        category:"dinner"
    },
    {
        title:"Jal Jeera",
        para:"Cucumber and mint-flavored drink with spices and herbs",
        imageUrl:"./images/jaljeera.webp",
        category:"breakfast"
    },
    {
        title:"Palak Paneer",
        para:"Creamy spinach curry with paneer (Indian cheese) and spices",
        imageUrl:"./images/palak-paneer.webp",
        category:"dinner"
    },
    {
        title:"Dal Makhani",
        para:"Black lentils cooked with kidney beans, butter, and cream",
        imageUrl:"./images/dal-makhani.webp",
        category:"dinner"
    },
    {
      title:"Naan or Roti",
      para:"Leavened or unleavened flatbread, often served with curries or used to scoop up sauces",
      imageUrl:"./images/bread-tandoori.webp",
      category:"dinner"
    }
];


const btn = document.getElementsByClassName("btn");
const container = document.getElementsByClassName("container");
let str="";
window.addEventListener("load",()=>{
    generateHTML(arr);
    container[0].innerHTML += str;
})

function generateHTML(getarr){
    getarr.map((item)=>{
        str += `
        <div class="item1">
               <div class="image">
                   <img src=${item.imageUrl}>
               </div>
               <div class="content">
                 <h2 class="names">${item.title}</h2>
                 <p class="para">${item.para}</p>
               </div>
           </div>`
       });
}

function color(){
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const black = Math.floor(Math.random()*256)
        const randomcolor = `rgb(${red},${green},${black})`
        return randomcolor;
    }

const btnArray = Array.from(btn);

btnArray.map((item)=>{
    item.addEventListener("click",(e)=>{
        const value = item.innerText;
        if(value === "All"){
            str="";
            generateHTML(arr);
            container[0].innerHTML = str;
            const changecolor = color();
            console.log(changecolor)
            document.body.style.backgroundColor = `${changecolor}`;
             
        }
        else{
            const newarr = arr.filter((item)=>{
                return item.category=== value;
             })
             str="";
             const changecolor = color();
            console.log(changecolor)
             generateHTML(newarr);
             container[0].innerHTML="";
             container[0].innerHTML = str;
             document.body.style.backgroundColor = `${changecolor}`;
        }
        
    })
})
 
//console.log(newarr)

import  {greet} from "./second.js";

let x=greet();
console.log(x);