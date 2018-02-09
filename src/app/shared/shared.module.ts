import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';

import { CKEditorModule } from 'ng2-ckeditor';
import { BigInputComponent } from './big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action.component';
import { TrustHtmlPipe } from '@app/shared/pipes/trust-html.pipe';
import { TrustUrlPipe } from '@app/shared/pipes/trust-url.pipe';
import { PhoneShellComponent } from './phone-shell/phone-shell.component';
import { ActivityFeedCardComponent } from './activity-feed-card/activity-feed-card.component';
import { AppShellComponent } from './app-shell/app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,


    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatStepperModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    TrustHtmlPipe, TrustUrlPipe,
    PhoneShellComponent,
    ActivityFeedCardComponent,
    AppShellComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,

    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatStepperModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,

    BigInputComponent,
    BigInputActionComponent,
    TrustHtmlPipe, TrustUrlPipe,
    PhoneShellComponent,
    AppShellComponent,
    ActivityFeedCardComponent
  ]
})
export class SharedModule { }
