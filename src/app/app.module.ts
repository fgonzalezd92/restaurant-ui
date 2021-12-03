import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

import { PresentationComponent } from './presentation/presentation.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { PlatilloService } from './platillo.service';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    MenuComponent,
    ContactComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [PlatilloService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
