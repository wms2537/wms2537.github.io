import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyachievementsComponent } from './myachievements/myachievements.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowdownModule, ShowdownConverter } from 'ngx-showdown';
import * as Showdown from 'showdown';

let colorExtension: Showdown.FilterExtension = {
  type: 'output',
  filter(text: string, converter: Showdown.Converter) {
    const lines = text.split('\n');
    // const anchors = lines.filter(l => l);
    const links: { [k: string]: string; } = {};
    // anchors.forEach((a) => {
    //   links[a.split('>')[2].split('<')[0]] = a.split('"')[1].split('#')[1];
    // });
    const transformedLines = [];
    for (const line of lines) {
      if (line.includes('href="#')) {
        links[line.split('>')[2].split('<')[0]] = line.split('"')[1].split('#')[1];
        transformedLines.push(line.replace('#', 'achievements#'))
        continue;
      }
      const content = line.split('<')[1].split('>')[1];
      if(links[content]) {
        const newLine = '<div id="' + links[content] + '"></div>\n' + line;
        transformedLines.push(newLine);
      }else{
        transformedLines.push(line);
      }
      
    }
    return transformedLines.join('\n');
  }
};


@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    MyachievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowdownModule.forRoot({ emoji: true, noHeaderId: true, flavor: 'github', extensions: [colorExtension] }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCarouselModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
