import { Component, ViewChild} from '@angular/core';
import { CategoryByLang } from '@models/categoryByLang';
import { CategoryService } from '@services/category/category.service';
import { LanguageServiceService } from '@services/language/language.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { MaterialModule } from '@modules/shared/material.module';

@Component({
  selector: 'app-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent{

  dataSource = new MatTableDataSource<CategoryByLang>();
  displayedColumns: string[] = ['id', 'name', 'actions'];
  selectedLanguange : string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private categoryService : CategoryService,
              private languageService : LanguageServiceService,
              public materialModule : MaterialModule,
              public dialog: MatDialog){}

  ngOnInit(){
      this.languageService.language$.subscribe(language => {
        this.languageService.use(language);
        this.getCategoriesBySelectedLang(language.toUpperCase());
      }); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getCategoriesBySelectedLang(langCode : string){
    this.categoryService.getAllcategories().subscribe({
      next : (v) => {
        this.dataSource.data = v.filter(c => c.langCode == langCode);
        console.log("all categories : ", this.dataSource.data);
      },
      error : (e) => console.log("an error occured :",e)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
        height: '50%',
        width: '60%',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
