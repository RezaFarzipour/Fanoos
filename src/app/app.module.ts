import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
import { SearchBoxResultComponent } from './components/search-box-result/search-box-result.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  
  declarations: [
    AppComponent,
    FilterSearchComponent,
    SearchBoxResultComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
