document.body.classList.remove('no-js');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.05});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
}else document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'));
// theme toggle (dark by default, choice is remembered)
const root=document.documentElement,btn=document.getElementById('theme'),lbl=document.getElementById('tl');
function paint(){const dark=root.dataset.theme!=='light';lbl.textContent=dark?'Light':'Dark';btn.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme')}
btn.addEventListener('click',()=>{const next=root.dataset.theme==='light'?'dark':'light';root.dataset.theme=next;try{localStorage.setItem('theme',next)}catch(e){}paint()});
paint();
// profile photo: tries common file names, shows a placeholder if none loads
(function(){
  const img=document.querySelector('.photo img');if(!img)return;
  const box=img.parentElement,names=['profile.jpg','profile.jpeg','profile.png','profile.webp','profile.jpg.jpg','profile.jpg.png'];
  let i=0;
  function next(){if(i>=names.length){box.classList.add('empty');return}img.src=names[i++]+'?v=5'}
  img.addEventListener('error',next);
  next();
})();
