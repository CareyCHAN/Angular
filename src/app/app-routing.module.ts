import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {appPath} from 'src/app/app-path.const';


const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: appPath.explore,
    loadChildren: './explore/explore.module#ExploreModule'
  },
  {
    path: appPath.rank,
    loadChildren: './rank/rank.module#RankModule'
  },
  {
    path: appPath.vote,
    loadChildren: './vote/vote.module#VoteModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
