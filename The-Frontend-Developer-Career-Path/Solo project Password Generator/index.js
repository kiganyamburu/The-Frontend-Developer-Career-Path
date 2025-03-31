const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

    function generatePasswords() {
        const length = 12; // Set default password length
        let password1 = "";
        let password2 = "";
    
        for (let i = 0; i < length; i++) {
            password1 += characters[Math.floor(Math.random() * characters.length)];
            password2 += characters[Math.floor(Math.random() * characters.length)];
        }
    
        // Assign generated passwords to input fields
        document.querySelectorAll("#text")[0].value = password1;
        document.querySelectorAll("#text")[1].value = password2;
    }
    generatePasswords()
