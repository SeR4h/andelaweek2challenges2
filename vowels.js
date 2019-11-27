
function countVowels(paragraph){
    var counter = 0;
    var characterCounter={}
    
    var set1= new Set()
    var vowels=['a','e','i','o','u'] 
    
    for(var i=0;i<=paragraph.length;i++){
    if(vowels.includes(paragraph.charAt(i))){
    set1.add(paragraph.charAt(i))
    }
    if(!characterCounter.hasOwnProperty(paragraph.charAt(i))){
    characterCounter[paragraph.charAt(i)] = 1
    //characterCounter[i]: myValue
    //add it as key to my bject with value of 1
    }
    else if(characterCounter[(paragraph.charAt(i))] == 1){
     counter =counter+ 1 
    characterCounter[paragraph.charAt(i)] =characterCounter[paragraph.charAt(i)] +1
    
    }
    }
    
    newVowel= Array.from(set1).join('')
    var myArray= [newVowel,counter]
    console.log(myArray)
    }
    var s="This is a test string"
    countVowels(s)