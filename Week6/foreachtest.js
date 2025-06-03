com1 = ['X', 'O', 'X']
com2 = ['O', 'X', 'O']
com3 = ['', '', '']
com4 = ['', '', '']
com5 = ['', '', '']
com6 = ['', '', '']
com7 = ['', '', '']
com8 = ['', '', '']

bigcom = [com1, com2, com3, com4, com5, com6, com7, com8]
/* if (
    (bigcom.some(com =>
        com.every(value => value === 'X' || value === 'O'))
    )
) {
    console.log("AJ Won")
}
else
    console.log("no one Won") */

if (bigcom.some(com => com.every(value => value === 'X') || bigcom.some(com => com.every(value => value === 'O'))))
    console.log("AJ Won");
else {
    console.log("No one Won");
}
