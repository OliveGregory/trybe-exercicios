let not = -1;


if (not >= 90 && not <= 100 ) {
    conlose.log('A');
}

else if  (not >= 80 && not <= 89) {
    conlose.log('B');
}

else if  (not >= 70 && not <= 79) {
    console.log('C');
}

else if  (not >= 60 && not <= 69) {
    conlose.log('D');
}

else if  (not >= 50 && not <= 59) {
    conlose.log('E');
}

else if  (not < 50 && not === 0) {
    console.log('F');
}

else if (not < 0 || not > 100) {
    console.log('ERROR note');
}