import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo.component';

@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoComponent]
})
export class PhotoModule {}
