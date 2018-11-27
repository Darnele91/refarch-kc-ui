import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TileComponent } from './tile/tile.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent, TileComponent, LeafletMapComponent],
  exports: [TileComponent, HeaderComponent, FooterComponent ]
})
export class SharedModule { }
