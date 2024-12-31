import express from 'express';
import React from 'react';
import Path from 'path';
import ReactDOM from 'react-dom/server';
import App from '../client/components/app';

const app = express();
const port = 3000;

app.use(express.static(Path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/ssr', (req, res) => {
  const root = (
    <html>
      <body>
        <div id='root'>
          <App />
        </div>

        <script src='/static/bundle.js'></script>
      </body>
    </html>
  );
  const html = ReactDOM.renderToString(root);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
