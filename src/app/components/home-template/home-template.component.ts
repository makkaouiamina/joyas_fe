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
  languages:{code:string, label:string, text:string}[] = [
    {code: 'en', label: 'language.english', text: 'Eng'},
    {code: 'fr', label: 'language.french', text: 'Fr'},
    {code: 'es', label: 'language.spanish', text: 'Esp'},
    {code: 'ar', label: 'language.arabic', text: 'Ar'},
  ];

  fillerNav:{text:string}[] = [
    {text: 'New Arrivals'},
    {text: 'Best Sellers'},
    {text: 'Earings'},
    {text: 'Single Earings'},
    {text: 'Single Earings'},
    {text: 'Rings'},
    {text: 'Necklaces'},
    {text: 'Bracelates'}
  ];

  constructor(private languageService : LanguageServiceService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  changeLanguage(code: string){
    var languageChoosen = this.languages.find(lang => lang.code == code);
    this.languageService.changeLanguage(code);
    languageChoosen != null ? this.languageCode = languageChoosen.text : this.languageCode;
  }

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  openSideBar(snav: MatSidenav){
    snav.toggle();
  }
}
