import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LanguageServiceService } from '@services/language/language.service';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {
  @Input() bgDark:boolean = false;
  dark:boolean = false;
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
    document.querySelector("html")?.classList.remove('dark');
    localStorage.setItem('darkMode', 'false') ;
    this.languages = this.languageService.languages;
    this.language = this.languageService.defaultLangCode.toUpperCase();

    //theme
    if(localStorage.getItem('darkMode')){
      this.dark = localStorage.getItem('darkMode') == 'true' || false;
    }
    if(this.dark){
      document.querySelector("html")?.classList.add('dark');
    }
  }

  setSelectedLanguage(code: string){
    this.languageService.setSelectedLanguage(code);
    this.language = code.toUpperCase();
  }

  openSideBar(snav: MatSidenav){
    snav.toggle();
  }

  switchDarkMode(): void{
    this.dark = localStorage.getItem('darkMode') == 'true' || false;
    this.dark = !this.dark;

    if(this.dark){
      document.querySelector("html")?.classList.add('dark');
      localStorage.setItem('darkMode', 'true') ;
    }
    else{
      document.querySelector("html")?.classList.remove('dark');
      localStorage.setItem('darkMode', 'false') ;
    }

  }
}
