// Ordinal Numbers

const competitors = ['Julia', 'Mark', 'Spencer', 'Ann' , 'John', 'Joe']
const ordinals = ['st', 'nd', 'rd', 'th']




for ( let i =  0; i < competitors.length; i++){
  if(i < ordinals.length){

    console.log(`${i+1}${ordinals[i]} competitor was ${competitors[i]}`)
  }else{
    
    console.log(`${i+1}${ordinals[3]} competitor was ${competitors[i]}`)
  }

}



