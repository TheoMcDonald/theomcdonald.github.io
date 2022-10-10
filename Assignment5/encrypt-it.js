/*
 * Starter file 
 */
var window;
var document;



(function() {

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */

  "use strict";
  
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener("click", cipher);
    document.getElementById("reset").addEventListener("click", reset);
    document.getElementById("all-caps").addEventListener("click", allCaps);
    document.getElementById("12pt").addEventListener("click", fontSize12);
    document.getElementById("24pt").addEventListener("click", fontSize24);
    
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function cipher(){

    let input = document.getElementById("input-text").value;
    input = input.toLowerCase();
    let length = input.length;
    let cipherText = "";
    

    
    if(document.getElementById("cipher-type").value == "shift") { 
      for(let i = 0; i < length; i++) {
          
        if (input[i] == "z"){
          cipherText += "a";
        }
      
        else if(input.charCodeAt(i) >= 97 && input.charCodeAt(i) < 122) {
          let charCode = input.charCodeAt(i);
          cipherText += String.fromCharCode(charCode + 1);
        }

        else {
          cipherText += input[i];
        }
          
      }
    }

    else if(document.getElementById("cipher-type").value == "random") {
      for(let i = 0; i < length; i++) {

        if (input[i] >= 'a' && input[i] <= 'z'){
          cipherText += String.fromCharCode((Math.floor(Math.random() * 25) + 97));
        }

        else {
          cipherText += input[i];
        }
          
      }

    }
    
    
    document.getElementById("result").textContent = cipherText;
    

  }

  function reset() {

    document.getElementById("result").textContent = document.getElementById("input-text").value;

  }

  function fontSize24() {

    document.getElementById("result").style.fontSize = "2em";

  }

  function fontSize12() {

    document.getElementById("result").style.fontSize = "1em";

  }

  function allCaps() {

    if (document.getElementById("all-caps").checked == true) {
      let input = document.getElementById("result").textContent;
      input = input.toUpperCase();
      document.getElementById("result").textContent = input;
    }
    
    

  }



})();
