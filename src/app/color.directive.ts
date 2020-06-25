import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements OnChanges {

    @Input()
    public color!: string;

    constructor(private el: ElementRef) {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.el.nativeElement.style.backgroundColor = this.color;
    }
}
