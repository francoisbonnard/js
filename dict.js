var dict = {}

// similar to

var dict2 = new Object()

var dict3 = {
    FirstName : "Chris",
    "one":1,
    1: "un truc"
}

dict3["age"]=16
dict3["FirstName"]="François"

for (var info in dict3) {
    console.log(info+" "+dict3[info])
}