// Usando o "ok" e o "cancel" do confirm

let userReady = confirm("Você está pronto?");
        
if(userReady == false) // return false (0) => "cancel"
    window.alert("Você tem muito à aprender, jovem padawan!");
else // return true (1) => "ok"
    window.alert("Você está pronto, mestre Jedi!");

// Usando o "ok" e o "cancel" do prompt

let userName = prompt("Qual seu nome?");

if(userName == null || userName == "") // return false (0) => "cancel"
    window.alert("Você não informou seu nome! ;-;");
else // return true (1) => "ok"
    window.alert("Você informou seu nome! (:");
    