const ctx = document.querySelector('canvas').getContext('2d');
const data = JSON.parse(window.location.search.substring(1));

ctx.lineWidth=3;
ctx.moveTo(50,50);
ctx.lineTo(50,400);
ctx.lineTo(750,400);

ctx.moveTo(50,50);
ctx.lineTo(30,50);
ctx.moveTo(50,100);
ctx.lineTo(30,100);
ctx.moveTo(50,150);
ctx.lineTo(30,150);
ctx.moveTo(50,200);
ctx.lineTo(30,200);
ctx.moveTo(50,250);
ctx.lineTo(30,250);
ctx.moveTo(50,300);
ctx.lineTo(30,300);
ctx.moveTo(50,350);
ctx.lineTo(30,350);

ctx.moveTo(50,400);
ctx.lineTo(50,420);

ctx.moveTo(85,400);
ctx.lineTo(85,420);
ctx.moveTo(120,400);
ctx.lineTo(120,420);

ctx.moveTo(155,400);
ctx.lineTo(155,420);
ctx.moveTo(190,400);
ctx.lineTo(190,420);

ctx.moveTo(225,400);
ctx.lineTo(225,420);
ctx.moveTo(260,400);
ctx.lineTo(260,420);

ctx.moveTo(295,400);
ctx.lineTo(295,420);
ctx.moveTo(330,400);
ctx.lineTo(330,420);

ctx.moveTo(365,400);
ctx.lineTo(365,420);
ctx.moveTo(400,400);
ctx.lineTo(400,420);

ctx.moveTo(435,400);
ctx.lineTo(435,420);
ctx.moveTo(470,400);
ctx.lineTo(470,420);

ctx.moveTo(505,400);
ctx.lineTo(505,420);
ctx.moveTo(540,400);
ctx.lineTo(540,420);

ctx.moveTo(575,400);
ctx.lineTo(575,420);
ctx.moveTo(610,400);
ctx.lineTo(610,420);

ctx.moveTo(645,400);
ctx.lineTo(645,420);
ctx.moveTo(680,400);
ctx.lineTo(680,420);

ctx.moveTo(715,400);
ctx.lineTo(715,420);
ctx.moveTo(750,400);
ctx.lineTo(750,420);

ctx.moveTo(50,50)
let dp1=0;
let dp2=0;
for(let xx=0; xx<20; xx++){
    const d1 = data.find(d=>d[0]==xx);
    const d2 = data.find(d=>d[0]==xx+1);
    dp1=(d1!=undefined)?d1[1]:dp2;
    dp2=(d2!=undefined)?d2[1]:dp1;
    ctx.moveTo(50+(xx*35),50+(dp1*50));
    ctx.lineTo(50+((xx+1)*35),50+(dp2*50));
}
ctx.stroke();