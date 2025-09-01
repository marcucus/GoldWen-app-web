import { Controller, Get, Render, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHome() {
    return this.appService.getHomePageData();
  }

  @Get('support')
  @Render('support')
  getSupport() {
    return this.appService.getSupportPageData();
  }

  @Get('confidentialite')
  @Render('privacy')
  getPrivacy() {
    return this.appService.getPrivacyPageData();
  }

  @Get('conditions')
  @Render('terms')
  getTerms() {
    return this.appService.getTermsPageData();
  }

  @Get('mentions-legales')
  @Render('legal')
  getLegal() {
    return this.appService.getLegalPageData();
  }

  @Get('contact')
  @Render('contact')
  getContact() {
    return this.appService.getContactPageData();
  }

  @Get('api/health')
  getHealth(): string {
    return this.appService.getHello();
  }

  @Get('robots.txt')
  getRobots(@Res() res: Response) {
    res.type('text/plain');
    res.sendFile('robots.txt', { root: 'public' });
  }

  @Get('sitemap.xml')
  getSitemap(@Res() res: Response) {
    res.type('application/xml');
    res.sendFile('sitemap.xml', { root: 'public' });
  }
}
