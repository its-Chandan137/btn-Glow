// const syncPointer = ({x: pointerX, y: pointerY }) => {

//     const x = pointerX.toFixed(2)
//     const y = pointerY.toFixed(2)

    
//     const xp = (pointerX/ window.innerWidth).toFixed(2)
//     const yp = (pointerY/ window.innerHeight).toFixed(2)
    
//     document.documentElement.style.setProperty('--x', x) 
//     document.documentElement.style.setProperty('--xp', xp) 
//     document.documentElement.style.setProperty('--y', y) 
//     document.documentElement.style.setProperty('--yp', yp)
// }
// document.body.addEventListener('pointermove', syncPointer)
//////////////////////////////////////////////////////////////////////
let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.onmousemove = function(e){
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
})