import { Component } from '@angular/core';
import { LanguageServiceService } from '@services/language/language.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  constructor(private languageService : LanguageServiceService){}

  ngOnInit(){
    this.languageService.language$.subscribe(language => {
      this.languageService.use(language);
    }); 
}

}
