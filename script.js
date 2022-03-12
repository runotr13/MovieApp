// let container = document.querySelector('.container')
// let movie = document.getElementById('movie')


// container.addEventListener('click', (e)=> {
//     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//         forPlus = e.target.classList.toggle('selected');
//             if(forPlus){
//                 count.innerText++
//             }else{
//                 count.innerText--
//             }
//             Total()
//             let NumberCount = JSON.stringify(count.innerText)
//             localStorage.setItem('NumberOfUsers',NumberCount)
//             sessionStorage.setItem('NumberOfUsers',NumberCount)
//             NumberCount = JSON.parse(localStorage.getItem('NumberCount'))
            
//     }
// });

// window.addEventListener('load',()=>{
//         film.innerText = "Avengers: Endgame"
//     })

// function Total(){
//     let sum = "";
//     let totalPay = document.getElementById('total')
//     let count = document.getElementById('count')

//     sum = (Number(count.innerText) * Number(movie.value))

//     totalPay.textContent = sum


//     let userTotal = JSON.stringify(totalPay.textContent)
//     localStorage.setItem('userTotalPay',userTotal)
//     sessionStorage.setItem('userTotalPay',userTotal)
//     userTotal = JSON.parse(localStorage.getItem('userTotal'))
// };
// movie.addEventListener('change',(e)=>{
//     Total()
// })


// function filmSec(){
//     movie.addEventListener("change",()=>{
//     if(movie.value == 9){
//         film.innerText = "The Lion King "

//     }else if(movie.value == 12){
//         film.innerText = "Joker"

//     }else if(movie.value == 8){
//         film.innerText = "Toy Story 4 "

//     }else if(movie.value == 10){
//         film.innerText = "Avengers: Endgame"
//     }
    

    
//     let userfilms = JSON.stringify(film.innerText)
    
//     localStorage.setItem('UserFilm',userfilms)
//     sessionStorage.setItem('UserFilm',userfilms)
//     userfilms = JSON.parse(localStorage.getItem('userfilms')) 
// })
// }
// filmSec()



