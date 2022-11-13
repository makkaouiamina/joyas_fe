import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor(private translateService: TranslateService) { }

  changeLanguage(code: string) {
    this.translateService.setDefaultLang(code);
    this.translateService.use(code);
  }
}
