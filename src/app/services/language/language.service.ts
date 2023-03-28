import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {
  defaultLangCode : string = 'en';
  languages:{code:string, label:string, text:string}[] = [
    {code: 'en', label: 'language.english', text: 'En'},
    {code: 'fr', label: 'language.french', text: 'Fr'},
    {code: 'es', label: 'language.spanish', text: 'Es'},
  ];

  languageSubject = new BehaviorSubject<string>(this.defaultLangCode);
  language$ = this.languageSubject.asObservable();

  constructor(private translateService: TranslateService) { }

  setSelectedLanguage(code: string) {
    this.languageSubject.next(code);
    this.translateService.use(code);
    this.defaultLangCode = code;
  }

  use(code : string){
    this.translateService.use(code);
  }
}
