import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';

import { DropDownButtonModule, SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { SliderModule, NumericTextBoxModule, ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { DropDownListModule, ComboBoxModule, DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DocumentEditorAllModule, DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';

import { ToolbarModule, TabModule } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ FormsModule, ToolbarModule, DropDownListAllModule, ColorPickerModule, SplitButtonModule,       ComboBoxModule, TabModule, DocumentEditorAllModule, DocumentEditorContainerAllModule, DropDownListModule, SliderModule, TooltipModule, NumericTextBoxModule,       CheckBoxModule, ButtonModule, DropDownButtonModule, DialogModule, BrowserModule, MultiSelectAllModule, ListViewAllModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
