function insert(num){
    cal.field.value += num
    potongan = cal.field.value.substring(0,1)
    potongan2 = cal.field.value.substring(1,2)
    if(potongan=="+"||potongan=="*"||potongan=="/"||potongan=="%")
    {
         alert("invalid arguments")
         clean()
    }
    else if(potongan2=="--"||potongan2=="//"||potongan2=="++"||potongan2==".."||potongan2=="**"||potongan2=="%%"){
         alert("invalid arguments")
         clean()
    }
    console.log(cal.field.value)
}

function equal(){
    //let result = cal.field.value 
    cal.field.value = eval(cal.field.value)
    // https://www.w3schools.com/jsref/jsref_eval.asp
}

function clean(){ // untuk remove
    cal.field.value = ""
}

function back(){ // untuk del
    cal.field.value = cal.field.value.substring(0, cal.field.value.length -1)
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_substring6
    // index ke 0 hingga ${length} -1, contoh 0 ke 9
}