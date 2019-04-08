import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import { StaticRouter } from 'react-router-dom';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const context = {};
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <Layout />
    </StaticRouter>
  );
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

app.listen(2048);

function htmlTemplate(reactDom) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
        </body>
        </html>
    `;
}
