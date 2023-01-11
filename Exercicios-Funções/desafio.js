let array = []
let abriu = 0
let fechou = 0

const string = (string) => {
    string.map(encontraColchetes)
    if( abriu == fechou){
        return true
    } else{
        return false
    }
}

function encontraColchetes(char){
    if(char == '('){
        abriu++
    }else if(char == ')'){
        fechou ++
    }
}

string('(Isto é um teste)')