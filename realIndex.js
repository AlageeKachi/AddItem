
function myFunction(){
      var inputVal = document.getElementById('userInput').value;

      var items = []
      items.push(inputVal)
      
      items.forEach(function(item) {
            var li = document.createElement("li");

            var text = document.createTextNode(item);

            li.appendChild(text);
            document.getElementById("myList").appendChild(li);
      });
}