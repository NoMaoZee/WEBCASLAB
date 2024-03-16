// Import Math.js library
const math = require('mathjs');

// Fungsi untuk menampilkan jawaban berdasarkan input
function showAnswer() {
    var input = document.getElementById('questionInput').value;
    var output = document.getElementById('answerOutput');
    
    // Lakukan sesuatu dengan input untuk mendapatkan output yang diinginkan
    // Contoh sederhana: gunakan Math.js untuk mengevaluasi ekspresi matematika
    try {
        var result = math.evaluate(input);
        output.textContent = result;
    } catch (error) {
        output.textContent = "";
    }
}
