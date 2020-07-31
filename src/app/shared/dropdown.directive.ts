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
        this.isOpen
         = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    /**
     * My Question List about this Directive.
     * 
     * Q1. At this code, i cannot understand the difference between ['$event'] as HostListener argument
     * and event:Event in toggleOpen() argument.
     * 1. What's the difference between the two components?
     * 2. What's the purpose for?
     * 3. and Why we need to setup like this?
     * 
     * A. If we use the event inside the function, we have to pass it in this way to the function (with this ugly array syntax, unfortunately)
     * If we wouldn't use it in the function (like in the lecture before) we could simply write,
     * 
     * @HostListener('document:click') toggleOpen() { ... }
     *
     *
     * StackOverflow: https://stackoverflow.com/questions/47156492
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