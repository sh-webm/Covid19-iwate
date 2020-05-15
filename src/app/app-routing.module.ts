import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/ホーム',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo',
    loadChildren: () => import('./acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo/acdfhekjsmousjdiujndkfjgmekmf0-mikvomfomnfo.module').then( m => m.ACDFHEKJSMOUSJDIUJNDKFJGMEKMF0MIKVOMFOMNFOPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
