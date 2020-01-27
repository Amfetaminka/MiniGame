let area = document.getElementById('area');
let firstPl = prompt('Введите имя первого игрока(Крестика)', 'player-1');
let secondPl = prompt('Введите имя второго игрока(Нолики)', 'player-2');
let step = 0;

area.addEventListener('click', function(event){
    step++
    if (step % 2 === 0) {
    event.target.innerHTML = 'O';
    }
    else {
        event.target.innerHTML = '+';
    }
    check()
});
function check() {
    let boxes = document.getElementsByClassName('box');
    let arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (i = 0; i < arr.length; i++){
    if (boxes[arr[i][0]].innerHTML == '+' && boxes[arr[i][1]].innerHTML == '+' && boxes[arr[i][2]].innerHTML == '+'){
        alert(`Выиграли Крестики, ${firstPl}`);
        location.reload();

    }else if (boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'){
        alert(`Выиграли Нолики, ${secondPl}`);
        location.reload();
        }
    }
};
// let step = {
//     template: 
//     `
//     `
// }
// new Vue({
//     el: '#app',
//     comments: {
//         stepsCom: step,
//     }
// })