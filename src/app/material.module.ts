import { NgModule } from '@angular/core';

import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatAutocompleteModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgMatSearchBarModule,
    NgxPaginationModule,
    MatTableModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgMatSearchBarModule,
    NgxPaginationModule,
    MatTableModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}