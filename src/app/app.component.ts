import {Component, OnInit} from '@angular/core';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  settings: any = {
    managePointForm: { pointId: '' },
    manageContentForm: { sectionId: '', type: ''},
    sectionTabType: 'GR'
  };

  public Editor = Editor;

  public exportPdfConfig = {
    stylesheets: [ 'EDITOR_STYLES' ],
    fileName: 'document.pdf',
    converterUrl: 'https://pdf-converter.cke-cs.com/v1/convert',
    converterOptions: {
      format: 'A4',
      margin_top: '0mm',
      margin_bottom: '0mm',
      margin_right: '0mm',
      margin_left: '0mm',
      page_orientation: 'portrait',
      header_html: undefined,
      footer_html: undefined,
      header_and_footer_css: undefined,
      wait_for_network: true,
      wait_time: 0
    }
  };
  public model = {
    editorData: "<p>Hello, world!</p>"
  };

  ngOnInit(): void {}

  /**
   * Set GR point data in modal
   * @param data
   */
  setPointModalData = (data) => {
    this.settings.managePointForm =  data;
  }

  /**
   * Set content data (GR/SR)
   * @param data
   */
  setContentModalData = (data?) => {
    this.settings.manageContentForm = {sectionId: '', type: this.settings.sectionTabType};
  }

  /**
   *
   * @param sectionId
   */
  setContentFormData = (sectionId?) => {
    this.settings.manageContentForm = {
      ...this.settings.manageContentForm,
      sectionId: sectionId || 'new',
      type: this.settings.sectionTabType
    };
  };

  /**
   * Set GR Point data for modal
   * @param pointId
   */
  setPointFormData = (pointId?) => {
    this.settings.managePointForm = {
      ...this.settings.managePointForm,
      pointId : pointId || 'new',
      type: this.settings.sectionTabType
    };
  };
}
