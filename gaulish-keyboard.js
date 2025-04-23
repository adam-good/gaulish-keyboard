text_map = {
    "d=" : "\u{0111}", // "đ", 
    "D=" : "\u{0110}", // "Đ",
    "a=" : "\u{00E2}", // "â",
    "A=" : "\u{00C2}", // "Â",
    "e=" : "\u{00EA}", // "ē",
    "E=" : "\u{00CA}",
    "i=" : "\u{00EE}", //"ī",
    "I=" : "\u{00CE}",
    "o=" : "\u{00F4}", //"ō",
    "O=" : "\u{00D4}",
    "u=" : "\u{00FB}", //"ū",
    "U=" : "\u{00DB}",
    "i/" : "i̯",
    "I/" : "I̯",
    "u/" : "u̯",
    "U/" : "U̯",
};

console.log("Foo");

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('myTextarea');
    
    // Function to handle text replacement
    function replaceText(event) {
      const currentValue = textarea.value;
      const valLen = currentValue.length;
      const cursorPosition = textarea.selectionStart;

      if (valLen < 2) return; // short circuit if needed

      const tail = currentValue.substr(valLen - 2);

      console.log("tail");
      
      if (tail in text_map) {

        // Find all occurrences and replace them
        const newValue = currentValue.replace(tail, text_map[tail]);
        
        // Calculate new cursor position (adjusting for the difference in length)
        const lengthDifference = currentValue.length - newValue.length;
        const newPosition = cursorPosition - lengthDifference;
        
        // Update the textarea value
        textarea.value = newValue;
        
        // Restore cursor position
        textarea.setSelectionRange(newPosition, newPosition);
      }
    }
    
    // Add event listeners for input and keyup events
    textarea.addEventListener('input', replaceText);
  });