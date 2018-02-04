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
import { KanaLearnComponent } from './learn/kana-learn/kana-learn.component';
import { KanjiLearnComponent } from './learn/kanji-learn/kanji-learn.component';
import { VocabularyLearnComponent } from './learn/vocabulary-learn/vocabulary-learn.component';
import { LearnComponent } from './learn/learn.component';
import { HiraganaLearnComponent } from './learn/hiragana-learn/hiragana-learn.component';
import { FlashcardComponent } from './learn/flashcard/flashcard.component';
import { CardComponent } from './learn/card/card.component';
import {ModalModule} from "ngx-bootstrap/modal";
import {ModalContentComponent} from "./login-page/register/modal/modal-content-component";
import { StatsComponent } from "./main/stats/stats.component";
import { ChartsModule } from 'ng2-charts/ng2-charts';

const routesConfig:Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginPage },
  {path:'register', component: Register},
  {path:'main', component: MainComponent},
  {path: 'learn', component: LearnComponent, children: [
    {path: 'hiragana', component: HiraganaLearnComponent},
    {path: 'katakana', component: KanaLearnComponent},
    {path: 'kanji', component: KanjiLearnComponent},
    {path: 'vocabulary', component: VocabularyLearnComponent},
    ]},
  {path: '**', redirectTo: 'login' }
];

const routerModule = RouterModule.forRoot(routesConfig, {
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
    KanaLearnComponent,
    KanjiLearnComponent,
    VocabularyLearnComponent,
    LearnComponent,
    HiraganaLearnComponent,
    FlashcardComponent,
    CardComponent,
    ModalContentComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    routerModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent],
})
export class AppModule { }
