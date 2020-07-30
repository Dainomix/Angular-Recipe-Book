import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen : boolean = false;

    // @HostListener('click') toggleOpen(eventData:Event) {
    //     this.isOpen = !this.isOpen;
    // }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * ENHANCEMENT                                                       *
     * Dropdown closed by a click anywhere outside                       *
     * => which means that a click on one dropdown closes any other one) *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */    
    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event']) toggleOpen(event:Event) {
        console.log('[document:click]' + event.target);
        this.isOpen
         = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    /**
     * $event is the reserved name for the actual event value like it can be used in
     * (click) = "clickHandler($event)" event bindings
     * 
     * @HostListener('eventName', args) supports an array of values like
     * args: A set of argments to pass to the handler maethod when the event occurs
     * 
     * ['$event.target.value', '$event.name']
     * 
     * that specifies what values will be passed as parameters to the event handler.
     * 
     * it looks like just always passing $event (assuming ['$event'] as default) would be a more reasonable aprroach,
     * but if Webworker is used, this way the amount of data passed between UI thread and WebWorker thread
     * can reduced by only passing that part(s) of the event that are actually required by the event handler
     * (or no value at all if the parameter is omitted)
     */
}