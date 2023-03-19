import { Component, OnChanges, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

@Component({
  selector: 'app-manage-content',
  templateUrl: './manage-content.component.html',
  styleUrls: ['./manage-content.component.css']
})
export class ManageContentComponent implements OnChanges {

  @Input() manageContentForm: any = {};
  @Output() setContentModalData: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('manageContentModal') private manageContentModal: ModalDirective;

  public Editor = Editor;

  ngOnChanges(): void {
    if (this.manageContentForm.sectionId) {
      this.manageContentModal.show();
    }
  }

  // closing modal data with current state and emitting to parent
  closeModal = () => {
    this.manageContentModal.hide();
    this.setContentModalData.emit(this.manageContentForm);
  };
}
