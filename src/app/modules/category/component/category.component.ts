import { Component, OnInit} from '@angular/core';
import { CategoryByLang } from '@models/categoryByLang';
import { CategoryService } from '@services/category/category.service';
import { LanguageServiceService } from '@services/language/language.service';
import { EMPTY, defaultIfEmpty, first } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent{

  public dataSource : CategoryByLang[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  selectedLanguange : string = '';

  constructor(private categoryService : CategoryService,
              private languageService : LanguageServiceService){}

  ngOnInit(){
      this.languageService.language$.subscribe(language => {
        this.languageService.use(language);
        this.getCategoriesBySelectedLang(language.toUpperCase());
      });
  }

  getCategoriesBySelectedLang(langCode : string){
    this.categoryService.getAllcategories().subscribe({
      next : (v) => {
        this.dataSource = v.filter(c => c.langCode == langCode);
        console.log("all categories : ", this.dataSource)
      },
      error : (e) => console.log("an error occured :",e)
    });
  }

}
