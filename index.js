const numberOfPages=20;
let currentPage=0;
let listOfRatings=[[0,7]];
//const listOfRatings={};

const inflate=x=>(x.length==1)?`00${x}`:(x.length==2)?`0${x}`:x;

//stops stars from resizing when window resizes
const resizeWindow=()=>{
    document.querySelector('.star-container').style.cssText=`--width:${50/window.devicePixelRatio}px;--height:${350/window.devicePixelRatio}px;`;
    const stars = document.querySelectorAll('.star');
    stars.forEach((star,i)=>star.style.cssText=`--length:${50/window.devicePixelRatio}px`);
}

//setup pages to be read
const main = document.querySelector('main');

for(let xx=1; xx<numberOfPages; xx++)
{
    const img = document.createElement('img');
    img.src = `pages/${inflate(xx.toString())}.png`;
    main.append(img);
}

//add submit button
const button = document.createElement('button');
button.textContent='Press Me';
button.addEventListener('click',()=>{
    const data = JSON.stringify(listOfRatings);
    window.open(`graph.html?${data}`,'_blank')
})
main.append(button);

//add event listener for clicking on stars
const stars = document.querySelectorAll('.star');
stars.forEach(elem=>elem.addEventListener('click',event=>{
    let index = parseInt(event.target.id.split('-')[1]);
    const rating = listOfRatings.find(r=>r[0]==currentPage);
    if(rating==undefined){
        listOfRatings.push([currentPage,index]);
        listOfRatings.sort((a,b)=>a[0]-b[0]);
    }
    else {
        if(rating[1]==index){
            index=7;
            listOfRatings = listOfRatings.filter(r => r[0]!=currentPage);
            rating[1]=-1;
        }
        else rating[1]=index;
    }
    stars.forEach((star,i)=>star.dataset.on=(i<index)?'0':1);
}));

//add event listener for toggling notes display
document.querySelector('.note-container-toggle').addEventListener('click',event=>{
    if(event.target.dataset.open=='0'){
        event.target.dataset.open='1';
        event.target.innerHTML='&#10005;'
        document.querySelector('.dialog-div').classList.remove('hidden');
    }
    else{
        event.target.dataset.open='0';
        event.target.innerHTML='&#9776;'
        document.querySelector('.dialog-div').classList.add('hidden');
    }
})

//
window.addEventListener('scroll',()=>{
    const newPage = parseInt(document.documentElement.scrollTop/950);
    if(newPage!=currentPage){
        let rating = listOfRatings.find(r=>r[0]==newPage);
        if(rating==undefined){
            const filterRatings = listOfRatings.filter(r => r[0]<newPage);
            rating=filterRatings.at(-1);
        }
        const stars = document.querySelectorAll('.star');
        stars.forEach((star,i)=>star.dataset.on=(i<rating[1])?'0':1);
        currentPage=newPage;
        document.querySelector('.current-page').textContent=currentPage+1;
    }
})

//add event listener for resizing window event
window.addEventListener('resize', ()=>resizeWindow());

document.querySelector('.current-page').textContent=currentPage+1;

//resize window for first time
resizeWindow();






// const elem = document.querySelector('.heat-bar-container')
// elem.addEventListener('click',event=>{
//     const rect = elem.getBoundingClientRect();
//     const height = (event.clientY - rect.top) / 50;
//     document.querySelector('.heat-bar').style.cssText=`--sy:${((event.clientY - rect.top)*100)/(rect.bottom-rect.top)}%`;
//     if(listOfRatings[currentPage]=='undefined')listOfRatings[currentPage]=0;
//     listOfRatings[currentPage] = 7 - height;
//     console.log(listOfRatings);
// });
