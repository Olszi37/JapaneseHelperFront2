import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'yes-no-modal-content',
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
            <button type="button" class="btn btn-primary pull-right" aria-label="No" (click)="onNoClicked()">No</button>
            <button type="button" class="btn btn-primary pull-right" aria-label="Yes" (click)="onYesClicked()">Yes</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css'],
})

export class YesNoModalComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() onYes: EventEmitter<any> = new EventEmitter();
  @Output() onNo: EventEmitter<any> = new EventEmitter();

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

  onYesClicked() {
    this.onYes.emit();
  }

  onNoClicked() {
    this.onNo.emit();
  }
}
