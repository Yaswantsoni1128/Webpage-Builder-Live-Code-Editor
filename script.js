document.getElementById('run-button').addEventListener('click', function() {
    // Get the HTML, CSS, and JavaScript code from the text areas
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('js-code').value;
    
    // Combine the code into one output
    let output = `
        <style>${cssCode}</style>
        ${htmlCode}
        <script>${jsCode}<\/script>
    `;
    
    // Write the output to the iframe
    let iframe = document.getElementById('output');
    iframe.srcdoc = output;
});
