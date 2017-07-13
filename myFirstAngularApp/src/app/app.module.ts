import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';   

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TaskComponent } from './task/task.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';



//


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TaskComponent,
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
