import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoPage } from './foto/foto.page';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component'
@NgModule({
  declarations: [
    AppComponent,
    FotoPage,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
