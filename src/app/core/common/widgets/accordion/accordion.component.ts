import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent)
  groups: QueryList<AccordionItemComponent>;

  constructor() { }

  /**
   * Invoked when all children (groups) are ready
   */
  ngAfterContentInit() {
    // console.log (this.groups);
    // Set active to first element
    this.groups.toArray()[0].opened = true;
    // Loop through all Groups
    this.groups.toArray().forEach((t) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      t.toggle.subscribe(() => {
        // Open the group
        this.openGroup(t);
      });
    });
  }

  /**
   * Open an accordion item
   *
   * @param accordionItem Accordion item instance
   */
  openGroup(accordionItem: AccordionItemComponent) {
    // close other groups
    this.groups.toArray().forEach((t) => t.opened = false);
    // open current group
    accordionItem.opened = true;
  }
}