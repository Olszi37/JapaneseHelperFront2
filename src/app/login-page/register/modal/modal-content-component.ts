import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {BsModalRef, ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'modal-content',
  template: `
    <div *ngIf="isModalShown" [config]="config" (onHidden)="onHidden()" bsModal #autoShownModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title pull-left">{{title}}</h4>
          </div>
          <div class="modal-body">
            <p>{{content}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary pull-right" aria-label="Ok" (click)="onOkClicked()">Ok</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../../../app.component.css'],
})

export class ModalContentComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  isModalShown: boolean = false;
  private config = {
    show: true,
    ignoreBackdropClick: true,
    keyboard: false
  };

  ngOnInit() {
    this.isModalShown = true;
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  onOkClicked() {
    this.onClose.emit();
  }
}
