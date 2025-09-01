const { NestFactory } = require('@nestjs/core');
const { join } = require('path');
const { AppModule } = require('./dist/app.module');

let app;

async function createApp() {
  if (!app) {
    const nestApp = await NestFactory.create(AppModule);
    
    // Set up view engine for serving HTML templates
    nestApp.useStaticAssets(join(__dirname, 'public'));
    nestApp.setBaseViewsDir(join(__dirname, 'views'));
    nestApp.setViewEngine('hbs');

    // Register Handlebars helpers using require for compatibility
    const hbs = require('hbs');
    hbs.registerHelper('eq', (a, b) => a === b);
    hbs.registerHelper('substring', (str, start, end) => str.substring(start, end));

    await nestApp.init();
    app = nestApp.getHttpAdapter().getInstance();
  }
  return app;
}

module.exports = async (req, res) => {
  const server = await createApp();
  return server(req, res);
};