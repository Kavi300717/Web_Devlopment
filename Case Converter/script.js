function getText() {
    return document.getElementById("tInput").value;
}

function setText(value) {
    document.getElementById("tInput").value = value;
}

function toUpper() {
    let text = getText();
    setText(text.toUpperCase());
}

function toLower() {
    let text = getText();
    setText(text.toLowerCase());
}

function toTitle() {
    let text = getText();
    let result = text
        .toLowerCase()
        .replace(/\b\w/g, letter => letter.toUpperCase());

    setText(result);
}
