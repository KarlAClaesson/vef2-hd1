export function makeHTML() {
    return '';
}

export function dataSetTemplate(data) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>Yultari</title>
            <link rel="stylesheet" href="styles.css">
        <head>
        <body>
            ${data}
        </body>
    </html>`;
}