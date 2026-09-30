const sky=document.getElementById('sky');
const imgs=['assets/lantern-large.png','assets/lantern-small.png'];
function lantern(x){
  if(!sky)return;const d=document.createElement('img');d.src=imgs[Math.random()<.5?0:1];d.alt='';d.className='lantern';
  const w=30+Math.random()*60;d.style.width=w+'px';d.style.left=(x??Math.random()*94)+'vw';
  d.style.opacity=.35+w/150;const t=14+Math.random()*16;d.style.animationDuration=t+'s,'+(3+Math.random()*3)+'s';
  sky.appendChild(d);setTimeout(()=>d.remove(),t*1000+500);
}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){for(let i=0;i<8;i++)setTimeout(()=>lantern(),i*600);setInterval(()=>lantern(),2200);}
const sun=document.getElementById('sun');
if(sun)sun.addEventListener('click',()=>{document.body.classList.add('leaving');setTimeout(()=>location.href='details.html',850);});
const btn=document.getElementById('release'),cnt=document.getElementById('count');
if(btn){let n=0;try{n=+localStorage.getItem('lanterns')||0}catch(e){}cnt.textContent=n;
  btn.addEventListener('click',()=>{n++;cnt.textContent=n;try{localStorage.setItem('lanterns',n)}catch(e){}for(let i=0;i<3;i++)setTimeout(()=>lantern(30+Math.random()*40),i*200);});}
