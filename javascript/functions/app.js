function show(a,...rest) {
    console.log('rest: ', rest);
  console.log(arguments);
}

show(10, 20, 30);