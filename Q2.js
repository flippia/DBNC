const numberHandler = number => {
    if( number % 14 === 0 ){ console.log('foobar') }
    else if( number % 2 === 0 ){ console.log('foo') }
    else if( number % 7 === 0 ){ console.log('bar') }
    else{ console.log(number) } 
};