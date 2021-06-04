import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyachievementsComponent } from './myachievements/myachievements.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/achievements' },
    { path: 'projects', component: MyprofileComponent },
    { path: 'achievements', component: MyachievementsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }