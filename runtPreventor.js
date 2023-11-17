/*
    runt - when the last line found in a paragraph ends with a single word
    The goal is for that to be prevented by finding runts and inserting a
    &nbsp; before it so the line has at least numWords aka "2"
*/
function runtPreventor(selector, numWords){

    // Get array of all the selected elements say paragraphs "p"
    let elements = document.querySelectorAll(selector);

    let i;
    for(i = 0; i < elements.length; i++){ 

      // Split the text content of each element into an array
      let textArray = elements[i].innerText.split(" ");

      // Remove the last n words and join them with a none breaking space to prevent a typography "runt"
      let lastWords = textArray.splice(-numWords, numWords).join("&nbsp;");

      // Join it all back together and replace the existing
      // text with the new text
      let textMinusLastWords = textArray.join(" ");
      elements[i].innerHTML = textMinusLastWords + " " +  lastWords;

    }; // end of for loop

  }; // end of runtPreventor

  // prevent runt by making the end of line always end in atleast two words
  runtPreventor("p", 2);