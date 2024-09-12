import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appColor]',
    standalone: true
})
export class ColorDirective implements OnChanges {

    @Input()
    color!: string;

    constructor(private el: ElementRef) {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ngOnChanges(changes: SimpleChanges): void {
        this.el.nativeElement.style.backgroundColor = this.color;
    }
}
