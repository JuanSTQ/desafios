const declaration = function(longitud, day, month, arr){
  let l = (longitud<=100 && longitud>=1) ? longitud : null
  let s=[];
  if(arr){
    s = (arr.length === l && arr.every(num => num<=5 && num>=1)) ? arr:null
  }else{
    for(let i=0; i<l; i++){
      s.push(parseInt(Math.random()*5+1))
    }
  }
  let d = (day<=31 && day>=1) ? day : null
  let m = (month<=12 && month>=1) ? month : null
  console.log(l, s, d, m)
  return ([l,s,d,m].some(value=> value===null)) ? null : {l, s, d, m }
}



const division = (longitud, day, month, arr)=>{
  const values = declaration(longitud, day, month, arr) || NaN
  if(!values){
    return console.log("Valores incorrectos")
  }
  let contador = 0;
  for(let i=0; i<longitud; i++){
    let validation=0;
    for(let j=i; j<i+values.m; j++){
      if(!values.s[j]){
        validation = values.d + 40
      }
      validation+= values.s[j] 
    }
    if(validation===values.d){
      contador+=1
    }
  }
  console.log(contador)
  return contador
}
//division(5, 4, 2, [2,1,3,2,4])
const d =division(5,20,5)
//division(5,10,3, [2,5,3,3,4])
console.log(d)