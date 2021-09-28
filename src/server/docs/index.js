import expressJSDocSwagger from 'express-jsdoc-swagger';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const options = {
  info: {
    version: '0.1.0',
    title: 'Crunchygram API',
  },
  baseDir: resolve(dirname(fileURLToPath(import.meta.url)), '../..'),
  filesPattern: './**/*.js',
  swaggerUIPath: '/docs',
  exposeSwaggerUI: true,
  exposeApiDocs: true,
  apiDocsPath: '/v3/api-docs',
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
};

const docs = app => {
  expressJSDocSwagger(app)(options);
};

export default docs;
