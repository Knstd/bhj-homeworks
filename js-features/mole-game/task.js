let hole = document.getElementsByClassName('hole')
let kill = document.getElementById('dead')
let missed = document.getElementById('lost')

for (let i = 0; i < hole.length; i++) {
  hole[i].onclick = () => {    
    if (hole[i].className.includes( 'hole_has-mole' )) {
      kill.textContent++      
      if (kill.textContent == 10) {
        alert('Вы победили!')
        
        kill.textContent = 0
        missed.textContent = 0
      }
    } else {
      missed.textContent++;
      if (missed.textContent == 5) {
        alert('Вы проиграли!')
        
        kill.textContent = 0
        missed.textContent = 0
      }
    }
  }
}
