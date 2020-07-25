const args = process.argv;


let output = "";

for(let i = 2 ; i<args.length ; i++) {


output+= args[i] ;

}

const translator = (str) => {

  return str.slice(1)+ str.slice(0,1) + 'ay';

}

console.log(translator(output));

