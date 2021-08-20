import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { TitleBar } from './title-bar';
import { defaultDocument, WEB_API_ACTION } from './data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { ListView, SelectEventArgs } from '@syncfusion/ej2-lists';
/**
 * Document Editor Component
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService]
})
export class AppComponent {
    public hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public culture: string = 'en-US';
    titleBar: TitleBar;

    onCreate(): void {
        let titleBarElement: HTMLElement = document.getElementById('default_title_bar');
        this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
        this.container.serviceUrl = this.hostUrl + WEB_API_ACTION;
        this.container.documentEditor.open(JSON.stringify(defaultDocument));
        this.container.documentEditor.documentName = 'Getting Started';
        this.titleBar.updateDocumentTitle();

        // Drag and Drop  
        
        document.getElementById("listview").addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("Text", (event.target as any).innerText);
            (event.target as any).classList.add('de-drag-target');
      
          });
      
          // Prevent default drag over for document editor element
          this.container.documentEditor.element.addEventListener("dragover", function (event) {
            event.preventDefault();
          });
      
          // Drop Event for document editor element
          this.container.documentEditor.element.addEventListener("drop", (e) => {
            var text = e.dataTransfer.getData('Text');//.replace(/\n/g, '').replace(/\r/g, '').replace(/\r\n/g, '');
            this.container.documentEditor.selection.select({ x: e.offsetX, y: e.offsetY, extend: false });
            //this.container.documentEditor.editor.insertText(text);
            this.container.documentEditor.editor.insertText(text);
          });
      
          document.addEventListener("dragend", (event) => {
            if ((event.target as any).classList.contains('de-drag-target')) {
              (event.target as any).classList.remove('de-drag-target');
            }
          });
        
    }

    onDocumentChange(): void {
        if (!isNullOrUndefined(this.titleBar)) {
            this.titleBar.updateDocumentTitle();
        }
        this.container.documentEditor.focusIn();
    }

    public listData: { [key: string]: Object }[] = [
        {
            text: 'Admin 1',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'Admin 2',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'Admin 3',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'Admin 4',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        },
        {
            text: 'Admin 5',
            category: 'Drag or click the field to insert.',
            htmlAttributes: { draggable: true }
        }
    ];


}

