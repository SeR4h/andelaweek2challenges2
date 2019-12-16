
function countVowels(paragraph){
    var counter = 0;
    var characterCounter={}
    
    var vowelSet = new Set()
    var vowels = ['a','e','i','o','u'] 
    
    for(var i=0;i<=paragraph.length;i++){
    if(vowels.includes(paragraph.charAt(i))){
    vowelSet.add(paragraph.charAt(i))
    }
    if(!characterCounter.hasOwnProperty(paragraph.charAt(i))){
    characterCounter[paragraph.charAt(i)] = 1
    //characterCounter[i]: myValue
    //add it as key to my bject with value of 1
    }
    else{ 
 	if(characterCounter[(paragraph.charAt(i))] == 1){
  
 counter = counter+ 1
     }
    characterCounter[paragraph.charAt(i)] =characterCounter[paragraph.charAt(i)] +1  
    }
    }
     // console.log(characterCounter)
    var newVowel= Array.from(vowelSet).join('')
    var myArray= [newVowel,counter]
    console.log(myArray)
    }
    var str="This is a test string "
    var finalstring = str.split(' ').join('')
   
    countVowels(finalstring)
