import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set up view engine for serving HTML templates
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // Register Handlebars helpers using require for compatibility
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment
  const hbs = require('hbs');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  hbs.registerHelper('eq', (a: unknown, b: unknown) => a === b);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  hbs.registerHelper('substring', (str: string, start: number, end: number) =>
    str.substring(start, end),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `GoldWen Showcase Website running on: http://localhost:${process.env.PORT ?? 3000}`,
  );
}

void bootstrap();
