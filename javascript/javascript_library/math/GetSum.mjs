/* ========================
!    returns sum of given arguments
========================== */
export default function GetSum (a, ...rest){

    // Returns the sum of all given values
    let restSum = 0;
    for (let value of rest)restSum += value;

    return a + restSum;

};