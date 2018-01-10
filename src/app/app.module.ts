import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { LoginPage } from './login-page/login-page.component';
import { LoginForm } from './login-page/login-form/login-form.component';
import { Routes, RouterModule } from '@angular/router'
import { Register } from './login-page/register/register.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { KanaOptionsComponent } from './main/kana-options/kana-options.component';
import { KanjiOptionsComponent } from './main/kanji-options/kanji-options.component';
import { VocabularyOptionsComponent } from './main/vocabulary-options/vocabulary-options.component';
import { KanaLearnComponent } from './learn/kana-learn/kana-learn.component';
import { KanjiLearnComponent } from './learn/kanji-learn/kanji-learn.component';
import { VocabularyLearnComponent } from './learn/vocabulary-learn/vocabulary-learn.component';
import { LearnComponent } from './learn/learn.component';

const routesConfig:Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginPage },
  {path:'register', component: Register},
  {path:'main', component: MainComponent, children: [
    {path: 'kana', component: KanaOptionsComponent},
    {path: 'kanji', component: KanjiOptionsComponent},
    {path: 'vocabulary', component: VocabularyOptionsComponent}
  ]},
  {path: 'learn', component: LearnComponent, children: [
    {path: 'kana', component: KanaLearnComponent},
    {path: 'kanji', component: KanjiLearnComponent},
    {path: 'vocabulary', component: VocabularyLearnComponent}
  ]}
];

const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: true,
  useHash: true
});

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    LoginForm,
    Register,
    MainComponent,
    KanaOptionsComponent,
    KanjiOptionsComponent,
    VocabularyOptionsComponent,
    KanaLearnComponent,
    KanjiLearnComponent,
    VocabularyLearnComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule, 
    AlertModule.forRoot(), 
    routerModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
