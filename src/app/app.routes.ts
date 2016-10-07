import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path: '', redirectTo: 'news/1', pathMatch: 'full'},
    {path: 'news/:page', component: StoriesComponent, data: {storyType: 'news'}},
    {path: 'newest/:page', component: StoriesComponent, data: {storyType: 'newest'}},
    {path: 'show/:page', component: StoriesComponent, data: {storyType: 'show'}},
    {path: 'ask/:page', component: StoriesComponent, data: {storyType: 'ask'}},
    {path: 'jobs/:page', component: StoriesComponent, data: {storyType: 'jobs'}},
    {path: 'item/:id', component: ItemCommentsComponent},
    {path: 'user/:user', component: UserComponent}
];

export const routing = RouterModule.forRoot(routes);
