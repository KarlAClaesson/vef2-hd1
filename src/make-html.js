/* export function makeHTML(stats) {
    const template = `
  
      `;

      return template;
} 
 */

export function dataSetTemplate(data, stats) {

    return `
    <!doctype html>
    <html>
        <head>
            <title>title</title>
            <link rel="stylesheet" href="styles.css">
        <head>
        <body>
            ${data}
            <section class="numerical-analysis">
            <h2>Töluleg greining</h2>
            <div>
              <p><strong>Stærsta gildi:</strong></p>
              <p>${stats.max}</p>
            </div>
            <div>
              <p><strong>Minnsta gildi:</strong></p>
              <p>${stats.min}</p>
            </div>
            <div>
              <p><strong>Summa:</strong></p>
              <p>${stats.sum.toFixed(3)}</p>
            </div>
            <div>
              <p><strong>Meðaltal:</strong></p>
              <p>${stats.mean.toFixed(3)}</p>
            </div>
            <div>
              <p><strong>Miðgildi:</strong></p>
              <p>${stats.median}</p>
            </div>
        </body>
    </html>`;
}

