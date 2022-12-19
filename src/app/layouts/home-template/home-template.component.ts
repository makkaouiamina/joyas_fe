import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LanguageServiceService } from '@services/language/language.service';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {

  theme : string = '';
  languageCode : string = 'Eng';
  expression : boolean = false;
  isOpened:boolean = false;
  router: string = '';
  languages:{code:string, label:string, text:string}[] = [
    {code: 'en', label: 'language.english', text: 'Eng'},
    {code: 'fr', label: 'language.french', text: 'Fr'},
    {code: 'es', label: 'language.spanish', text: 'Esp'},
  ];

  rountings:{name: string, link: string}[] = [
    {name: 'Products', link : '/products'},
    {name: 'Categories', link : '/categories'},
    {name: 'Providers', link : '/providers'}
  ];
  constructor(private languageService : LanguageServiceService) { }

  ngOnInit(): void {
  }

  changeLanguage(code: string){
    var languageChoosen = this.languages.find(lang => lang.code == code);
    this.languageService.changeLanguage(code);
    languageChoosen != null ? this.languageCode = languageChoosen.text : this.languageCode;
  }

  openSideBar(snav: MatSidenav){
    snav.toggle();
  }
}
