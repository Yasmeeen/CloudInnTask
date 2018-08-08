import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CallapiService } from './Services/callapi.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { AngularDraggableModule } from 'angular2-draggable';


import { DndModule } from 'ngx-drag-drop';



// import { DemoComponent } from "./components/demo-component";
// import { Ng2DragDropModule } from 'ng2-drag-drop';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule,
    MatCheckboxModule,
    DndModule,
    AngularDraggableModule
    
    // Ng2DragDropModule.forRoot()
    // DemoComponent
    

  ],
  providers: [CallapiService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
