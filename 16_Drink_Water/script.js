const litres = document.getElementById('litres')
const smallCups = document.querySelectorAll(".cup-small")
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
}