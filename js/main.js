function Encrypt() {
    plaintext = document.getElementById("p").value.toLowerCase().replace(/[^a-z]/g, "");
    k = document.getElementById("k").value.toLowerCase().replace(/[^a-z]/g, "");
    // do some error checking
    if (plaintext.length < 1) {
        alert("please enter some plaintext (letters and numbers only)");
        return;
    }
    if (k.length <= 1) {
        alert("keyword should be at least 2 characters long");
        return;
    }
    ciphertext = "";
    for (i = 0; i < plaintext.length; i++) {
        ciphertext += String.fromCharCode((((k.charCodeAt(i % k.length) - 97) - (plaintext.charCodeAt(i) - 97) + 26) % 26) + 97);
    }
    document.getElementById("c").value = ciphertext;
}

function Decrypt(f) {
    ciphertext = document.getElementById("c").value.toLowerCase().replace(/[^a-z]/g, "");
    k = document.getElementById("k").value.toLowerCase().replace(/[^a-z]/g, "");
    // do some error checking 
    if (ciphertext.length < 1) {
        alert("please enter some plaintext (letters and numbers only)");
        return;
    }
    if (k.length <= 1) {
        alert("keyword should be at least 2 characters long");
        return;
    }
    plaintext = "";
    for (i = 0; i < ciphertext.length; i++) {
        plaintext += String.fromCharCode((( (k.charCodeAt(i % k.length) - 97) - (ciphertext.charCodeAt(i) - 97) + 26) % 26) + 97);
    }
    document.getElementById("p").value = plaintext;
} 