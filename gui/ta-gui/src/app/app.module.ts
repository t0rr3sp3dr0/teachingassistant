import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MetasComponent } from './metas/metas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoService } from './alunos/shared/aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    AlunosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'metas',
        component: MetasComponent,
      },
      {
        path: 'alunos',
        component: AlunosComponent,
      },
    ]),
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
