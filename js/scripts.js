$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

    var word = $("input#word").val();

    // create arrays to compare

    var wordArray = word.split("")

    var reverseArray = wordArray.slice().reverse();

    var sentence1 = [];
    var sentence2 = [];

    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] != " "){
        sentence1.push(wordArray[i]);
      }
      if (reverseArray[i] != " "){
        sentence2.push(reverseArray[i]);
      }
    }

    var stringSentence1 = sentence1.toString();
    var stringSentence2 = sentence2.toString();

    if (stringSentence1 === stringSentence2){
      $(".show-result").show();
      $("#result").text("Yes! It's a palindrome.")
    } else {
      $(".show-result").show();
      $("#result").text("No! That's not a palindrome.")
      }


    // alert(reverseArray);
    // alert(wordArray);
    //
    // for (var i = 0; i < wordArray.length; i++) {
    //   if (wordArray[i] === reverseArray[i]) {
    //   } else {
    //   return false;
    //   }
    // };


    // For single words:

    // var word = $("input#word").val();
    //
    // var reverse = word.split("").reverse().join("");
    //
    // if (word === reverse) {
    //   alert("Yay!");
    // } else {
    //   alert("Nay!");
    // }

  });
});
