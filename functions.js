let generateColors = document.querySelector('.GC');
let list = document.querySelector('.parent')
const maxPattel = 1;


const generatePattel = () => {
    list.innerHTML = " "
    let hexCode = Math.floor(Math.random() * 0xffffff).toString(16);
    hexCode  = "#" +  hexCode

    for  (let i  = 0; i  < maxPattel; i ++) {
        const color = document.createElement('li');
        list.appendChild(color);
        color.classList.add("hay");
        color.innerHTML = ` 
        <div class="color" style ="background:${hexCode};"></div>
        <h4 class="hexcode" >${hexCode}</h4>` ;
        

    }
}

generatePattel ();

generateColors.addEventListener("click" , generatePattel)
