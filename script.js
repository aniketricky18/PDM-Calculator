function calculate() {
    const originalValue = parseFloat(document.getElementById('originalValue').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(originalValue) || isNaN(percentage)) {
        alert('Please enter valid numbers.');
        return;
    }

    let newValue;
    let change;

    if (operation === 'add') {
        newValue = originalValue + (originalValue * (percentage / 100));
        change = newValue - originalValue;
    } else if (operation === 'subtract') {
        newValue = originalValue - (originalValue * (percentage / 100));
        change = originalValue - newValue;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p><strong>OnRoad Price:</strong> $${newValue.toFixed(2)}</p>
        <p><strong>Tax Applied:</strong> $${Math.abs(change).toFixed(2)}</p>
    `;

    // Add animation to result display
    resultElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultElement.style.transform = 'scale(1)';
    }, 300);
}
