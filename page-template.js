// pageTemplate.js

exports.getPage = function(
  reactElementTag,
  reactElementString,
  reactDOMMethod
  ) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js" defer></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" defer></script>
      <script src="./components.js" defer></script>
    </head>
    <body> 
      <h1>${ reactDOMMethod }</h1>
      <div id="react-root">${ reactElementString }</div> 
      <a href="hydrate.html">hydrate</a>
      <a href="render.html">render</a>
    </body>
    <script>
      window.addEventListener('load', (e) => {
        ReactDOM.${ reactDOMMethod }(
          React.createElement(${ reactElementTag }),
          document.getElementById('react-root')
        );
      });
    </script>
  </html>
  `;
}