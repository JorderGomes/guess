const colorsToSwap = []
const allColors = ["red", "blue", "pink", "yellow", "green", "purple"]
const secretColors = ["red", "blue", "pink", "yellow", "green", "purple"]
let qtdAttempts = 0;
let endGame = false;

function testWin() {
    let contHit = 0;
    for (let i = 0; i < allColors.length; i++) {
        if (allColors[i] === secretColors[i]) contHit++;
    }
    $("#qtd-hits").html("");
    $("#qtd-hits").html(contHit);
    if (contHit === secretColors.length){
        endGame = true;
        $("#qtd-final-attempts").html(qtdAttempts);
        $("#end-message").removeClass("hidden");
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createHouse(id) {
    const house = document.createElement('div');
    house.id = id;
    house.classList.add('circle', 'flex-center');
    const colorsWindow = document.getElementById("colors");
    colorsWindow.appendChild(house);
}

function initGame() {
    shuffleArray(secretColors);
    allColors.map(createHouse);
    testWin();
}

initGame();

$(document).ready(function () {
    $('.circle').click(swapColors);
});

function swapColors() {
    if (endGame) {
        return;
    }

    const id = $(this).attr('id');
    $(this).addClass('selected');

    if (colorsToSwap.includes(id)) {
        $(this).removeClass('selected');
        colorsToSwap.length = 0;
        return;
    }
    colorsToSwap.push(id);

    if (colorsToSwap.length == 2) {

        const house1 = $(`#${colorsToSwap[0]}`);
        const house2 = $(`#${colorsToSwap[1]}`);

        house1.attr('id', colorsToSwap[1]);
        house2.attr('id', colorsToSwap[0]);

        position1 = allColors.indexOf(colorsToSwap[0]);
        position2 = allColors.indexOf(colorsToSwap[1]);
        [allColors[position1], allColors[position2]] = [allColors[position2], allColors[position1]];

        house1.removeClass('selected');
        house2.removeClass('selected');

        colorsToSwap.length = 0;
        qtdAttempts++;
        $("#qtd-attempts").html("");
        $("#qtd-attempts").html(qtdAttempts);

        testWin();
    }
}