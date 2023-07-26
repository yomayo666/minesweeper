var difficulty = 1;
//var clicks = 0;
var index = -99;
var countOftime = 0;
var dd = 0
let bombOftake = 10;
const audio = new Audio("2332.mp3");
const audio1 = new Audio("2326.mp3");
const audio3 = new Audio("spit-yeeeeeaaaahhh.mp3")

const addStyle = (() => {
    var link  = document.createElement('link');
    link.rel  = "stylesheet";
    link.href = "style.css";
    return document.head.appendChild(link);  
})();
const addHeader = (() => {
    let div = document.createElement('div');
    div.className = "header";
    //select = '<p><select name="select" size="3" multiple>'
    //div.appendChild(textnode)
    document.body.append(div);

})();
const formOfComplexity = (() => {
/*     var im = document.createElement("img");
    im.src = 'imag/1.png';
    document.getElementById('myid').appendChild(im); */
    let form = document.createElement('form');
    form.className = "formComplex"
    document.querySelector('.header').appendChild(form);
    //let select = document.createElement('select');
    let select = '<select name="select" class="mainSelect" size="1"></select>'
    document.querySelector('.formComplex').innerHTML = select;
     let easily =  '<option value="1" selected>easily</option>'
    let normal = '<option value="2">normal</option>'
    let hard ='<option value="3">hard</option>'
    let difficulties =  easily + normal + hard
    document.querySelector('select').innerHTML = difficulties ; 
    //document.querySelector('.keyboard').innerHTML = litlle_key ;
   // document.querySelector('.header').innerHTML = form;
    //inp = '<select name="select" size="3" multiple>'
})();

const playingField = (() => {
    let div = document.createElement('div');
    div.className = "playingField";
    document.body.append(div);
})();


/* inp = '<button>Новая игра</button>'
document.querySelector('.header').innerHTML = inp; */
/* for(let i = 0; i < buttons.length; i++){
    if(buttons[i] === "Backspace" || buttons[i] === "CapsLock" || buttons[i] === "Enter" || buttons[i] === "Shift"){
        litlle_key += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        big_cey += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        ru_lit += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>'
        ru_big += '<div class="big-bat klaw-ru" data="'+buttons[i]+'">' + buttons[i] + '</div>' */
/* startGame(8, 8, 15);

function startGame(width, height, bombs) */
//document.querySelector('.formComplex').classList




const addDivKeyboard = (() => {
    let div = document.createElement('div');
    div.className = "keyboard";
    document.body.append(div);
})();

const textare = (() => {
    inp = '<textarea  value="1" class="info-panel" rows="1" cols="5"  disabled></textarea>'
    document.querySelector('.header').insertAdjacentHTML("afterbegin", inp)
})();
const addtimer = (() => {
    inp = '<textarea  value="1" class="timer" rows="1" cols="5"  disabled></textarea>'
    document.querySelector('.header').insertAdjacentHTML("afterbegin", inp)
})(); 
const useFlags = (() => {
    inp = '<textarea  value="1"  class="classOflags" rows="1" cols="1"  disabled></textarea>'
    document.querySelector('.header').insertAdjacentHTML("afterbegin", inp)
})(); 
document.querySelector('.timer').value = "";
let timerId = setInterval(setTime, 1000);

function setTime() {
    countOftime += 1
    document.querySelector('.timer').value = countOftime;
}
const nowPlay = (() => {
    let butNowGame = '<button class="btn">Новая игра</button>'
    document.querySelector('.header').insertAdjacentHTML("afterbegin", butNowGame)
})();
const addStyleOfGame = (() => {
        let butNowGame = '<button class="butStyleOfGame" value="1">Dark style</button>'
        document.querySelector('.header').insertAdjacentHTML("afterbegin", butNowGame)
})(); 





const buttond = document.querySelector('.btn');
buttond.addEventListener('click', handle);
function handle() {
    index = -99;
    clicked = 0;

    dd = 0;
    document.querySelector(".classOflags").value = dd;
    document.querySelector('.info-panel').value = clicked;
    document.querySelector('.timer').value = countOftime;
    countOftime = 0;
    if(difficulty === 1){
        return startGame(10, 10, bombOftake)
    }else if(difficulty === 2){
        return startGame(15, 15, bombOftake)
    }else if(difficulty === 3){
        return startGame(25, 25, bombOftake)
    }
    
}


function startGame(width, height, bombOftake){
    let playingField = document.querySelector('.playingField')
    let cellsCount = width * height
    let i = 0;
    let butons = "";
    document.querySelector('.info-panel').value = 0;
    while(i < cellsCount){
            i += 1
            butons += '<button class="batt"></button>'
        if(i % width === 0){
            //console.log(cellCount % width)
/*             const divContainer = document.querySelector('.playingField')
            divContainer.style["grid-template-columns"] = "repeat(8, 40px)";  */
        }
    }
    const divContainer = document.querySelector('.playingField')
    divContainer.style["grid-template-columns"] = "repeat("+ width +", 1rem)";
    divContainer.style["grid-template-rows"] = "repeat("+ width +",1rem)";
    document.querySelector('.playingField').innerHTML = butons ;

    const styleOfGame = document.querySelector('.butStyleOfGame');
    styleOfGame.addEventListener('click', chageStyle);
    function chageStyle(){  
        const style = document.createElement('style');
    if(document.querySelector('.butStyleOfGame').innerText == "Dark style"){
        document.querySelector('.butStyleOfGame').innerText = "Light style"
        style.innerHTML = `
            button {
            background-color: rgba(0, 0, 0, 0.44);
            color: white;

            }
        `;
        document.head.appendChild(style);
    }else{
        document.querySelector('.butStyleOfGame').innerText = "Dark style"
        style.innerHTML = `
        button {
            color: black;
            background-color: wheat;

        }
    `;
    document.head.appendChild(style);
    }
  } 




    let cells = [...playingField.children];
    let bombs = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, bombOftake);
    let closedCount = cellsCount;
    let clicked = 0;
    if(index !== -99){
        //clicks += 1
        //document.querySelector('.info-panel').value =  clicks;
        clicked += 1;



        document.querySelector('.info-panel').value =  clicked;
        let column = index % width;
        let row = Math.floor(index / width);
        open(row, column)
    }
    const filed = document.querySelector('.playingField');
    filed.addEventListener('click', mainClick);
    
    function mainClick(e){  
        if(e.target.className !== 'batt'){
            return 
        }
        //  document.querySelector('.info-panel').value =  clicked;
        clicked += 1;
        audio.play();
        document.querySelector('.info-panel').value =  clicked;
        index = cells.indexOf(e.target);
        let column = index % width;
        let row = Math.floor(index / width);
        open(row, column)
    }




    function isValid(row, column){
        return row >= 0
        && row < height
        && column >= 0
        && column < width;
    }
    function getCount(row, column){
        let count = 0;
        for(let x = -1; x <= 1; x++){
            for(let y = -1; y <= 1; y++){
                if(isBomb(row + y, column + x)){
                    count++
                }
            }
        }
        return count;
    }
    function open(row, column){
        if(!isValid(row, column)) return;
        const index = row * width + column
        const cell = cells[index];
        if(cell.disabled === true) {

            return;
        }

  

        cell.disabled = true
        if(isBomb(row, column)){
            if(clicked === 1){
                ifFerstSteps()
                return;
            }else{
                openAllBombs()
                countOftime = 0;
                audio1.play();
                cell.innerHTML = 'X';
                cell.style.background = 'black';
                cell.style.color = 'red';
                alert('you lost on move '+ document.querySelector('.info-panel').value + ' ! and you played ' + document.querySelector('.timer').value + ' seconds!');

                document.querySelector('.info-panel').value = 0;
                return;

            }
            

        }
        closedCount--;
        if(closedCount <= bombOftake){
            audio3.play();
            alert('you wan on move! '+ document.querySelector('.info-panel').value + ' and you played' + document.querySelector('.timer').value + ' seconds!');
            clicked = 0
            countOftime = 0
            document.querySelector('.info-panel').value = 0;
            document.querySelector('.timer').value = 0

        }

            let count = getCount(row, column); 
            if (count !== 0){
                cell.innerHTML = count;
                return;
            }
        for(let x = -1; x <= 1; x++){
        for(let y = -1; y <= 1; y++){
                open(row + y, column + x);
            }
        }
    }
    
    function isBomb(row, column){;
        if(!isValid(row, column)) return false; 
        let index = row * width + column;
        //console.log(indes)
        return bombs.includes(index);
    } 
    function openAllBombs(){
        document.querySelector('.timer').value = countOftime;
        clearInterval(timerId); 
        for(let i = 0; i < cellsCount; i++){
            //console.log(n)
            if(cells[i].disabled === false){
                cells[i].disabled = true
                if(bombs.includes(i)){
                    cells[i].innerHTML = 'X';
                    cells[i].style.background = 'black';
                    cells[i].style.color = 'red';
                }else{
                    cells[i].style.background = 'green';
                }
            }cells[i].disabled = true
        }
    }
/*     for(let i = 0; i < cellsCount; i++){
        cells[i].disabled = true
        if(bombs.includes(i)){
            cell.innerHTML = 'X';
            cell.style.background = 'black';
            cell.style.color = 'red';

        }
    } */

}handle()




document.querySelector('.playingField').addEventListener('contextmenu', (e) => {
    e.preventDefault() 
    if(clearInterval(timerId)) return;
    if(e.target.tagName !== 'BUTTON'){
        return 
    }else if(e.target.disabled === false){
        e.target.style.background = 'red';  
        e.target.style.border= "1px solid"
        e.target.innerHTML = "O";
        e.target.disabled = true 
        dd += 1
        document.querySelector(".classOflags").value = dd;
    }else if(e.target.innerHTML === "O"){
        dd -= 1
        document.querySelector(".classOflags").value = dd;
        e.target.style.background = '';
        e.target.style.border= ""
        e.target.innerHTML = " "
        e.target.disabled = false
    }   
}) 
document.querySelector("select").addEventListener('change', function (fa) {
    index = -99;
    clicked = 0;
    dd = 0;

    //document.querySelector('.info-panel').value = clicks;
    document.querySelector('.timer').value = countOftime;
    clicked = 0
    if(fa.target.value == 1){
        difficulty = 1
    }else if(fa.target.value == 2){
        difficulty = 2
    }else if(fa.target.value == 3){
        difficulty = 3
    }handle()
  })

const addFormOfBombs = (() => {
    let form = document.createElement('form');
    form.className = "formbombs"
    easyBombs = ""
    document.querySelector('.header').appendChild(form);
    let selected = '<select name="selectOfBombs" class="selectBombs" size="1"></select>'
    document.querySelector('.formbombs').innerHTML = selected;
    for(let i = 0; i < 100; i++){
        if(i === 10){
            easyBombs +=  '<option  selected>'+i+'</option>'
        }
        easyBombs +=  '<option value="'+i+'">'+i+'</option>'
    }
    document.querySelector('.selectBombs').innerHTML = easyBombs ;
})();


document.querySelector(".selectBombs").addEventListener('change', function (x) {
    bombOftake = x.target.value
    dd = 0;
    handle()

  })



function ifFerstSteps() {
    clicked = 0;
    dd = 0;
    if(difficulty === 1){
        return startGame(10, 10, bombOftake)
    }else if(difficulty === 2){
        return startGame(15, 15, bombOftake)
    }else if(difficulty === 3){
        return startGame(25, 25, bombOftake)
    }
    
}


