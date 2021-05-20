import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {

  /**
   * Css applied to the container of each item in the accordion
   */
  @Input() itemCss: string;

  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the item title bar
   */
  @Input() title: string;

  /**
   * Emitted when user clicks on item title bar
   *
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

}
