import { Component, OnChanges, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

@Component({
  selector: 'app-manage-point',
  templateUrl: './manage-point.component.html',
  styleUrls: ['./manage-point.component.css']
})
export class ManagePointComponent implements OnChanges {

  @Input() managePointForm: any = {};
  @Output() setPointModalData: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('managePointModal') private managePointModal: ModalDirective;

  editorData: any = {
    point: '',
    headline: ''
  };
  public Editor = Editor;

  ngOnChanges(): void {
    if (this.managePointForm.pointId) {
      this.managePointModal.show();
    }
  }

  // closing modal data with current state and emitting to parent
  closeModal = () => {
    this.managePointModal.hide();
    this.setPointModalData.emit({...this.managePointForm, pointId: ''});
  };

}
