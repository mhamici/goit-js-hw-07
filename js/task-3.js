const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});

//console.log("Input element retrieved:", nameInput);
//console.log("Span element retrieved:", nameOutput);
//console.log("Trimmed input value:", "marry");
//console.log("Span text set to 'Anonymous'");
//console.log("Span text set to:", "marry");
