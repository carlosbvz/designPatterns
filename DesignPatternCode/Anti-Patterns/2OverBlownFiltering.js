
let aRidiculousLargeVariableJustToTestThisAntiPattern;

// Test for not empty
if(aRidiculousLargeVariableJustToTestThisAntiPattern !== '') {
    console.log('not empty');
    console.log(aRidiculousLargeVariableJustToTestThisAntiPattern);
}

aRidiculousLargeVariableJustToTestThisAntiPattern = null;

if(aRidiculousLargeVariableJustToTestThisAntiPattern !== '') {
    console.log('not empty');
    console.log(aRidiculousLargeVariableJustToTestThisAntiPattern);
}

//So... we might wanna test for undefined, empty and null vars, then
// if(aRidiculousLargeVariableJustToTestThisAntiPattern !== '' && aRidiculousLargeVariableJustToTestThisAntiPattern !== null && aRidiculousLargeVariableJustToTestThisAntiPattern !== undefined) {
//     console.log('not empty, nor null, not undefined');
//     console.log(aRidiculousLargeVariableJustToTestThisAntiPattern);
// } else {
//     console.log('var did not pass test')
// }

// aRidiculousLargeVariableJustToTestThisAntiPattern = '';
// aRidiculousLargeVariableJustToTestThisAntiPattern = null;
// aRidiculousLargeVariableJustToTestThisAntiPattern = 'wop';

// Or just... 

// if(aRidiculousLargeVariableJustToTestThisAntiPattern) {
//     console.log('All good')
// } else {
//     console.log('var did not pass test')
// }



// With a short hand
// aRidiculousLargeVariableJustToTestThisAntiPattern? console.log('all Good') : console.log('Not good')

// // Another way/ implementation for default values: 
// aRidiculousLargeVariableJustToTestThisAntiPattern = aRidiculousLargeVariableJustToTestThisAntiPattern || 'Default value assigned';

// console.log(aRidiculousLargeVariableJustToTestThisAntiPattern)


// Question ==> Using eval() ?