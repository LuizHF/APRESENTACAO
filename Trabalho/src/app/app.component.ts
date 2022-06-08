import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicial', url: '/folder/Inicial', icon: 'book' },
    { title: 'Novidades', url: '/folder/Novidades', icon: 'megaphone' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Salvos', url: '/folder/Salvos', icon: 'archive' },
    { title: 'Meus Arquivos', url: '/folder/Meus-Arquivos', icon: 'folder' },
    { title: 'Indisponiveis', url: '/folder/Indisponiveis', icon: 'warning' },
  ];
  
  constructor() {}
}
