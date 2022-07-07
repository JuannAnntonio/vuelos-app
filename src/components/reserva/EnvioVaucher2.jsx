<h1>
<p>
¿A dónde enviamos tus vouchers?
El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.
</p>
</h1>

function ValidateEmail(input) {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (input.value.match(validRegex)) {
      
          alert("Valid email address!");
      
          document.form1.text1.focus();
      
          return true;
      
        } else {
      
          alert("Invalid email address!");
      
          document.form1.text1.focus();
      
          return false;
      
        }
      
      }
}

export default App;