export function dataSetTemplate(data) {

    return `
    <!doctype html>
    <html>
        <head>
            <title>title</title>
            <link rel="stylesheet" href="styles.css">
        <head>
        <body>
            ${data}
        </body>
    </html>`;
}

