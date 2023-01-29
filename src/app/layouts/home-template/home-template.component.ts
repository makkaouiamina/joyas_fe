import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LanguageServiceService } from '@services/language/language.service';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {
  theme : string = '';
  expression : boolean = false;
  isOpened:boolean = false;
  router: string = '';
  languages : {code:string, label:string, text:string}[] = [];
  language : string = '';

  rountings:{name: string, link: string}[] = [
    {name: 'Products', link : '/products'},
    {name: 'Categories', link : '/categories'},
    {name: 'Providers', link : '/providers'}
  ];
  constructor(private languageService : LanguageServiceService) { }

  ngOnInit(): void {
    this.languages = this.languageService.languages;
    this.language = this.languageService.defaultLangCode.toUpperCase();
  }

  setSelectedLanguage(code: string){
    this.languageService.setSelectedLanguage(code);
    this.language = code.toUpperCase();
  }

  openSideBar(snav: MatSidenav){
    snav.toggle();
  }
}
