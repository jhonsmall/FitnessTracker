//Module when we import all the angular material packages that i want to use in the app
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [MatButtonModule,
            MatIconModule],
  exports: [MatButtonModule,
            MatIconModule]
})
export class MaterialModule { }
