import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { AddRecordComponent } from './add-record/add-record.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    AddRecordComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: CrudComponent },
      { path: 'add', component: AddRecordComponent },
    ]),
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
