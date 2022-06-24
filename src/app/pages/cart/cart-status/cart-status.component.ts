import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal,) { }

  ngOnInit(): void {

  }
  onCancel(){
    this.activeModal.close('Close click')
  }
}
