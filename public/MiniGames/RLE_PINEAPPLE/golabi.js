
let golabi = [
    [1, 1, 1, 1, 1, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
    [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1],
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
    [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1]];
for (let i = 0; i < 16; i++) {
    golabi[i][15] = 1;
}
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        if (golabi[i][j] == 1) {
            document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "white";
        } else if (golabi[i][j] == 2) {
            document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "green";
        } else if (golabi[i][j] == 3) {
            document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "brown";
        } else if (golabi[i][j] == 4) {
            document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "yellow";
        }

    }
}
let firstClick = false;
let firstClickX = 0;
let firstClickY = 0;
let secondClick = false;
let secondClickX = 0;
let secondClickY = 0;
let firstClickButton = null;
let secondClickButton = null;
let canbegray = true;
let printscreencolor = "white";
let printscreennumber = 0;
let printscreenstring = "";
let finalmoveX = 0;
let finalmoveY = 0;

ordercolor = [];
ordernumber = [];
orderfirstClickX = [];
orderfirstClickY = [];
ordersecondClickX = [];
ordersecondClickY = [];
orderstring = [];
orderfinalmoveX = [];
orderfinalmoveY = [];
ordergolabo = [[[]]];

const screen = document.querySelector(".screen");
const undobutton = document.querySelector(".undo-button");

//click on the two cells to be colored 
for (let i = 0; i < 256; i++) {
    document.getElementsByClassName("cel-button")[i].addEventListener("click", function () {
        console.log(golabi);
        if (firstClick == false && i % 16 == finalmoveX && Math.floor(i / 16) == finalmoveY) {
            firstClick = true;
            firstClickX = i % 16;
            firstClickY = Math.floor(i / 16);
            firstClickButton = this;
            //this.style.backgroundColor = "gray";
        } else if (secondClick == false) {
            secondClick = true;
            secondClickX = i % 16;
            secondClickY = Math.floor(i / 16);
            secondClickButton = this;
            //this.style.backgroundColor = "gray";
        } else if (firstClick == false) {
            alert("باید" + finalmoveX + "," + finalmoveY + "کلیک کنید");
        }
        if (firstClick == true && secondClick == true) {
            // alert(firstClickX + " " + firstClickY + " " + secondClickX + " " + secondClickY);
            firstClick = false;
            secondClick = false;
            if (firstClickButton.style.backgroundColor == secondClickButton.style.backgroundColor) {
                //alert(firstClickX + " " + firstClickY + " " + secondClickX + " " + secondClickY);
                if (firstClickY == secondClickY) {
                    for (let i = firstClickX + 1; i < secondClickX - 1; i++) {
                        //document.getElementsByClassName("cel-button")[firstClickY * 16 + i].style.backgroundColor = "gray";
                        //console.log(golabi);
                        //alert(golabi[firstClickX][firstClickY] + " " + golabi[i][secondClickY]);
                        if (golabi[firstClickY][firstClickX] != golabi[firstClickY][i]) {
                            canbegray = false;
                            break;
                        }
                    }
                    if (canbegray == true) {
                        //alert(firstClickX + " " + firstClickY + " " + secondClickX + " " + secondClickY);
                        printscreencolor = firstClickButton.style.backgroundColor;
                        ordercolor.push(printscreencolor);

                        for (let i = firstClickX; i <= secondClickX; i++) {
                            golabi[finalmoveY][i] = 0;
                            //  golabi[i][secondClickY] = 0;
                            document.getElementsByClassName("cel-button")[firstClickY * 16 + i].style.backgroundColor = "gray";
                            printscreennumber++;
                        }
                        ordernumber.push(printscreennumber);
                        orderfirstClickX.push(firstClickX);
                        orderfirstClickY.push(firstClickY);
                        ordersecondClickX.push(secondClickX);
                        ordersecondClickY.push(secondClickY);
                        orderstring.push(printscreenstring);
                        orderfinalmoveX.push(finalmoveX);
                        orderfinalmoveY.push(finalmoveY);
                        ordergolabo.push(golabi);
                        console.log(ordergolabo);
                        printscreenstring += printscreennumber + "" + printscreencolor + " ";
                        screen.innerHTML = printscreenstring;
                        printscreennumber = 0;
                        updatefinalmove();
                    }
                    else {
                        alert("you can't do this move");
                    }

                    //alert(finalmoveX + " " + finalmoveY);
                    canbegray = true;
                } else if (firstClickY - secondClickY == -1) {
                    if (golabi[finalmoveY][finalmoveX] == golabi[secondClickY][secondClickX]) {
                        for (let i = firstClickX + 1; i < 16; i++) {

                            //console.log(golabi);

                            if (golabi[finalmoveY][finalmoveX] != golabi[secondClickY][i]) {
                                canbegray = false;
                                break;
                            }
                        }
                        for (let i = 0; i < secondClickY + 1; i++) {
                            //document.getElementsByClassName("cel-button")[firstClickY * 16 + i].style.backgroundColor = "gray";
                            //console.log(golabi);
                            // alert(golabi[firstClickX][firstClickY] + " " + golabi[i][secondClickY]);
                            //document.getElementsByClassName("cel-button")[(firstClickY+1) * 16 + i].style.backgroundColor = "red";
                            if (golabi[finalmoveY][finalmoveX] != golabi[secondClickY][i]) {
                                canbegray = false;
                                break;
                            }
                            if (canbegray == true) {
                                printscreencolor = firstClickButton.style.backgroundColor;
                                ordercolor.push(printscreencolor);

                                for (let i = finalmoveX; i <= 15; i++) {
                                    golabi[finalmoveY][i] = 0;
                                    //  golabi[i][secondClickY] = 0;
                                    document.getElementsByClassName("cel-button")[firstClickY * 16 + i].style.backgroundColor = "gray";
                                    printscreennumber++;
                                }
                                for (let i = 0; i <= secondClickX; i++) {
                                    golabi[finalmoveY + 1][i] = 0;
                                    //  golabi[i][secondClickY] = 0;
                                    document.getElementsByClassName("cel-button")[(firstClickY + 1) * 16 + i].style.backgroundColor = "gray";
                                    printscreennumber++;
                                }
                                ordernumber.push(printscreennumber);
                                orderfirstClickX.push(firstClickX);
                                orderfirstClickY.push(firstClickY);
                                ordersecondClickX.push(secondClickX);
                                ordersecondClickY.push(secondClickY);
                                orderstring.push(printscreenstring);
                                orderfinalmoveX.push(finalmoveX);
                                orderfinalmoveY.push(finalmoveY);
                                ordergolabo.push(golabi);
                                printscreenstring += printscreennumber + printscreencolor + " ";
                                screen.innerHTML = printscreenstring;
                                printscreennumber = 0;
                                updatefinalmove();
                            }
                            else {
                                alert("خطا");
                            }
                        }
                    } else {
                        alert("رنگ مخالف است");
                    }

                }
                else {
                    alert("حرکت غیر مجاز است");
                }
            }
            else {
                alert(" رنگ مخالف است");
            }
        }
    });
}



//Update finalmove
function updatefinalmove(undobutton) {
    if (secondClickX == 15) {
        finalmoveX = 0;
        finalmoveY = secondClickY + 1;
    }
    else {
        finalmoveX = secondClickX + 1;
        finalmoveY = secondClickY;
    }
    checkwinner();
}
//undobutton button undo
undobutton.onclick = function () {

    if (orderstring.length > 0) {
        printscreenstring = orderstring[orderstring.length - 1];
        printscreennumber = ordernumber[orderstring.length - 1];
        screen.innerHTML = printscreenstring;
        // for (let i = 0; i < ordergolabo[ordergolabo.length - 1].length; i++) {
        //     for (let j = 0; j < ordergolabo[ordergolabo.length - 1][i].length; j++) {
        //         if (ordergolabo[ordergolabo.length - 1][i][j] == 1) {
        //             document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "white";
        //         } else if (ordergolabo[ordergolabo.length - 1][i][j] == 0) {
        //             document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "gray";
        //         } else if (ordergolabo[ordergolabo.length - 1][i][j] == 2) {
        //             document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "green";
        //         } else if (ordergolabo[ordergolabo.length - 1][i][j] == 3) {
        //             document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "brown";
        //         } else if (ordergolabo[ordergolabo.length - 1][i][j] == 4) {
        //             document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "yellow";
        //         }
        //     }
        // }
        finalmoveX = orderfinalmoveX[orderfinalmoveX.length - 1];
        finalmoveY = orderfinalmoveY[orderfinalmoveY.length - 1];
        lastcolor = ordercolor[ordercolor.length - 1];
        lastnumber = ordernumber[ordernumber.length - 1];
        lastsfirstClickX = orderfirstClickX[orderfirstClickX.length - 1];
        lastsfirstClickY = orderfirstClickY[orderfirstClickY.length - 1];
        lastssecondClickX = ordersecondClickX[ordersecondClickX.length - 1];
        lastssecondClickY = ordersecondClickY[ordersecondClickY.length - 1];
        lastsstring = orderstring[orderstring.length - 1];
        lastsfinalmoveX = orderfinalmoveX[orderfinalmoveX.length - 1];
        lastsfinalmoveY = orderfinalmoveY[orderfinalmoveY.length - 1];
        golabi = ordergolabo[ordergolabo.length - 2];
        console.log(golabi);
        //alert(lastcolor + " " + lastnumber+" "+ lastsfirstClickX + " " + lastsfirstClickY + " " + lastssecondClickX + " " + lastssecondClickY + " " + lastsstring + " " + lastsfinalmoveX + " " + lastsfinalmoveY);
        if (lastsfirstClickY == lastssecondClickY) {
            for (let i = lastsfirstClickX; i <= lastssecondClickX; i++) {
                document.getElementsByClassName("cel-button")[lastsfirstClickY * 16 + i].style.backgroundColor = lastcolor;
            }
        }
        else if (firstClickY - secondClickY == -1) {
            for (let i = lastsfirstClickX; i <= 15; i++) {
                document.getElementsByClassName("cel-button")[(lastsfirstClickY) * 16 + i].style.backgroundColor = lastcolor;
            }
            for (let i = 0; i <= lastssecondClickX; i++) {
                document.getElementsByClassName("cel-button")[(lastsfirstClickY + 1) * 16 + i].style.backgroundColor = lastcolor;
            }
        }


        orderstring.pop();
        ordernumber.pop();
        orderfirstClickX.pop();
        orderfirstClickY.pop();
        ordersecondClickX.pop();
        ordersecondClickY.pop();
        orderfinalmoveX.pop();
        orderfinalmoveY.pop();
        ordercolor.pop();
        ordergolabo.pop();
    }
    else {
        alert("سابقه یکسان نیست");
    }
}

const resetbutton = document.querySelector(".reset-button");
resetbutton.onclick = function () {
    golabi = [
        [1, 1, 1, 1, 1, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1]]
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            if (golabi[i][j] == 1) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "white";
            } else if (golabi[i][j] == 2) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "green";
            } else if (golabi[i][j] == 3) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "brown";
            } else if (golabi[i][j] == 4) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "yellow";
            }
            else {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "gray";
            }
        }
    }

    screen.innerHTML = "";
    printscreennumber = 0;
    ordernumber = [];
    orderfirstClickX = [];
    orderfirstClickY = [];
    ordersecondClickX = [];
    ordersecondClickY = [];
    orderstring = [];
    orderfinalmoveX = [];
    orderfinalmoveY = [];
    ordergolabo = [];
    ordercolor = [];

    firstClick = false;
    firstClickX = 0;
    firstClickY = 0;
    secondClick = false;
    secondClickX = 0;
    secondClickY = 0;
    firstClickButton = null;
    secondClickButton = null;
    canbegray = true;
    printscreencolor = "white";
    printscreennumber = 0;
    printscreenstring = "";
    finalmoveX = 0;
    finalmoveY = 0;

}





function checkwinner() {
    let winner = true;
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            if (golabi[i][j] != 0) {
                winner = false;
            }
        }
    }
    if (winner == true) {
        alert("winner");
    }
}

checkwinner();

const golabibutton = document.querySelector(".golabi");
golabibutton.onclick = function () {
    golabi = [
        [1, 1, 1, 1, 1, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 4, 3, 4, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
        [1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
        [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1]]
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            if (golabi[i][j] == 1) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "white";
            } else if (golabi[i][j] == 2) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "green";
            } else if (golabi[i][j] == 3) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "brown";
            } else if (golabi[i][j] == 4) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "yellow";
            }
            else {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "gray";
            }
        }
    }

    screen.innerHTML = "";
    printscreennumber = 0;
    ordernumber = [];
    orderfirstClickX = [];
    orderfirstClickY = [];
    ordersecondClickX = [];
    ordersecondClickY = [];
    orderstring = [];
    orderfinalmoveX = [];
    orderfinalmoveY = [];
    ordergolabo = [];
    ordercolor = [];

    firstClick = false;
    firstClickX = 0;
    firstClickY = 0;
    secondClick = false;
    secondClickX = 0;
    secondClickY = 0;
    firstClickButton = null;
    secondClickButton = null;
    canbegray = true;
    printscreencolor = "white";
    printscreennumber = 0;
    printscreenstring = "";
    finalmoveX = 0;
    finalmoveY = 0;
}
ananasbutton = document.querySelector(".ananas");
ananasbutton.onclick = function () {
    golabi = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 5, 2, 5, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2, 5, 5, 2, 5, 5, 2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 5, 2, 5, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2, 5, 5, 2, 5, 5, 2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 6, 4, 3, 4, 3, 4, 6, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 6, 3, 4, 3, 4, 3, 6, 1, 1, 1, 1],
        [1, 1, 1, 1, 6, 3, 4, 3, 4, 3, 4, 3, 6, 1, 1, 1],
        [1, 1, 1, 1, 6, 4, 3, 4, 3, 4, 3, 4, 6, 1, 1, 1],
        [1, 1, 1, 1, 6, 3, 4, 3, 4, 3, 4, 3, 6, 1, 1, 1],
        [1, 1, 1, 1, 6, 4, 3, 4, 3, 4, 3, 4, 6, 1, 1, 1],
        [1, 1, 1, 1, 6, 3, 4, 3, 4, 3, 4, 3, 6, 1, 1, 1],
        [1, 1, 1, 1, 1, 6, 3, 4, 3, 4, 3, 6, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1, 1, 1, 1]]
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            if (golabi[i][j] == 1) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "white";
            } else if (golabi[i][j] == 2) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "#1F4918";
            } else if (golabi[i][j] == 3) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "#3B3615";
            } else if (golabi[i][j] == 4) {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "#EDD104";
            } else if(golabi[i][j] == 5){
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "#30C137";
            } else if(golabi[i][j] == 6){
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "#9B8D21";
            } 
            else {
                document.getElementsByClassName("cel-button")[i * 16 + j].style.backgroundColor = "gray";
            }
        }
    }

    screen.innerHTML = "";
    printscreennumber = 0;
    ordernumber = [];
    orderfirstClickX = [];
    orderfirstClickY = [];
    ordersecondClickX = [];
    ordersecondClickY = [];
    orderstring = [];
    orderfinalmoveX = [];
    orderfinalmoveY = [];
    ordergolabo = [];
    ordercolor = [];

    firstClick = false;
    firstClickX = 0;
    firstClickY = 0;
    secondClick = false;
    secondClickX = 0;
    secondClickY = 0;
    firstClickButton = null;
    secondClickButton = null;
    canbegray = true;
    printscreencolor = "white";
    printscreennumber = 0;
    printscreenstring = "";
    finalmoveX = 0;
    finalmoveY = 0;
}