$(document).ready(function(){
  var fnl= function(sentence){
    var first= sentence.charAt(0).toUpperCase();
    var last= sentence.slice(-1).toUpperCase();
    return first + last

  }
  var reverse = function(sentence){
    var fnl = sentence.split('').reverse().join('')
    var first= fnl.charAt(0).toUpperCase();
    var last= fnl.slice(-1).toUpperCase();
    return first + last
  }
  var third = function(){
    alert(fnl(sentence))
    alert(reverse(sentence))
    alert(sentence + reverse(sentence))
  }
  var fourth = function(sentence){
    var length = sentence.length
    var position = sentence.charAt(length / 2)
    alert(position + sentence + reverse(sentence))
  }
  var sentence= prompt("Enter a sentence");

  $("#lion").click(function(){
    alert(sentence)
  })

  $("#giraffe").click(function(){
    alert(fourth(sentence))
  })


})
