var Ng2FlatpickrComponent_1;
import { __decorate } from "tslib";
import { EventEmitter, Output, Component, ViewChild, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
if (typeof window !== 'undefined') {
    require('flatpickr');
}
let Ng2FlatpickrComponent = Ng2FlatpickrComponent_1 = class Ng2FlatpickrComponent {
    constructor() {
        this.newDateSelected = new EventEmitter();
        this._tabindex = 0;
        this.onTouchedFn = () => { };
        this.defaultFlatpickrOptions = {
            wrap: true,
            clickOpens: true,
            onChange: (selectedDates) => {
                console.log('selectged Date changed');
                console.log(selectedDates);
                this.writeValue(selectedDates);
                this.newDateSelected.emit(selectedDates);
            }
        };
        this.placeholder = "";
        this.addClass = "";
        this.hideButton = false;
        this.propagateChange = (_) => { };
    }
    get tabindex() { return this._tabindex; }
    set tabindex(ti) { this._tabindex = Number(ti); }
    ///////////////////////////////////
    writeValue(value) {
        this.propagateChange(value);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    ///////////////////////////////////
    setDateFromInput(date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    }
    setAltInputPlaceholder(placeholder) {
        this.flatpickrElement.nativeElement._flatpickr.altInput.setAttribute('placeholder', placeholder);
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }
        if (this.flatpickrElement.nativeElement.flatpickr) {
            this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        }
        //if( this.setDate ) {
        //this.setDateFromInput( this.setDate );
        //}
    }
    ngOnChanges(changes) {
        console.log('ngOnChanges');
        console.log(changes);
        if (this.flatpickrElement.nativeElement
            && this.flatpickrElement.nativeElement._flatpickr) {
            if (changes.hasOwnProperty('setDate')
                && changes['setDate'].currentValue) {
                this.setDateFromInput(changes['setDate'].currentValue);
            }
            if (this.config.altInput
                && changes.hasOwnProperty('placeholder')
                && changes['placeholder'].currentValue) {
                this.setAltInputPlaceholder(changes['setDate'].currentValue);
            }
        }
    }
    onFocus(event) {
        this.onTouchedFn();
    }
};
__decorate([
    Output()
], Ng2FlatpickrComponent.prototype, "newDateSelected", void 0);
__decorate([
    ViewChild('flatpickr', {
        static: true
    })
], Ng2FlatpickrComponent.prototype, "flatpickrElement", void 0);
__decorate([
    Input()
], Ng2FlatpickrComponent.prototype, "config", void 0);
__decorate([
    Input()
], Ng2FlatpickrComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], Ng2FlatpickrComponent.prototype, "addClass", void 0);
__decorate([
    Input()
], Ng2FlatpickrComponent.prototype, "setDate", void 0);
__decorate([
    Input()
], Ng2FlatpickrComponent.prototype, "tabindex", null);
__decorate([
    Input()
], Ng2FlatpickrComponent.prototype, "hideButton", void 0);
Ng2FlatpickrComponent = Ng2FlatpickrComponent_1 = __decorate([
    Component({
        selector: 'ng2-flatpickr',
        template: `
		<div class="ng2-flatpickr-input-container" #flatpickr>
			<input *ngIf="!hideButton" class="ng2-flatpickr-input {{ addClass }}" [placeholder]="placeholder" [tabindex]="tabindex" type="text" (focus)="onFocus($event)" data-input>
			<input *ngIf="hideButton" maxLength="5" class="ng2-flatpickr-input {{ addClass }}" [placeholder]="placeholder" [tabindex]="tabindex" type="text" (focus)="onFocus($event)" data-input>
								
			<ng-content></ng-content>
		</div>
		`,
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Ng2FlatpickrComponent_1),
                multi: true
            }
        ]
    })
], Ng2FlatpickrComponent);
export { Ng2FlatpickrComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZsYXRwaWNrci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZmxhdHBpY2tyLyIsInNvdXJjZXMiOlsic3JjL25nMi1mbGF0cGlja3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pFLElBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDO0lBQzdCLE9BQU8sQ0FBRSxXQUFXLENBQUUsQ0FBQztDQUMxQjtBQW9CRCxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBcUI7SUFBbEM7UUFFWSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFN0MsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUN0QixnQkFBVyxHQUFhLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUxQiw0QkFBdUIsR0FBcUI7WUFDbkQsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsQ0FBRSxhQUFrQixFQUFHLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBRSxhQUFhLENBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQztTQUNELENBQUM7UUFXRixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBVXRCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFnQm5CLG9CQUFl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LEVBQUU7MERBQ2lCO0FBR3pCO0lBREUsS0FBSyxFQUFFO3VEQUNhO0FBR3RCO0lBREMsS0FBSyxFQUFFO3NEQUNlO0FBR3ZCO0lBREMsS0FBSyxFQUFFO3FEQUNpQztBQUl6QztJQURDLEtBQUssRUFBRTt5REFDVztBQXhDUCxxQkFBcUI7SUFsQmpDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7OztHQU9SO1FBQ0YsU0FBUyxFQUFFO1lBQ1Y7Z0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBRSxHQUFHLEVBQUUsQ0FBQyx1QkFBcUIsQ0FBRTtnQkFDdEQsS0FBSyxFQUFFLElBQUk7YUFDWDtTQUNEO0tBQ0QsQ0FBQztHQUNXLHFCQUFxQixDQXVHakM7U0F2R1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPdXRwdXQsQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZsYXRwaWNrck9wdGlvbnMgfSBmcm9tICcuL2ZsYXRwaWNrci1vcHRpb25zLmludGVyZmFjZSc7XG5cbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcblxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHJlcXVpcmUoICdmbGF0cGlja3InICk7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25nMi1mbGF0cGlja3InLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0LWNvbnRhaW5lclwiICNmbGF0cGlja3I+XG5cdFx0XHQ8aW5wdXQgKm5nSWY9XCIhaGlkZUJ1dHRvblwiIGNsYXNzPVwibmcyLWZsYXRwaWNrci1pbnB1dCB7eyBhZGRDbGFzcyB9fVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFt0YWJpbmRleF09XCJ0YWJpbmRleFwiIHR5cGU9XCJ0ZXh0XCIgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiIGRhdGEtaW5wdXQ+XG5cdFx0XHQ8aW5wdXQgKm5nSWY9XCJoaWRlQnV0dG9uXCIgbWF4TGVuZ3RoPVwiNVwiIGNsYXNzPVwibmcyLWZsYXRwaWNrci1pbnB1dCB7eyBhZGRDbGFzcyB9fVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFt0YWJpbmRleF09XCJ0YWJpbmRleFwiIHR5cGU9XCJ0ZXh0XCIgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiIGRhdGEtaW5wdXQ+XG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0YCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZiggKCkgPT4gTmcyRmxhdHBpY2tyQ29tcG9uZW50ICksXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZzJGbGF0cGlja3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcblxuICBAT3V0cHV0KCkgbmV3RGF0ZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdHB1YmxpYyBmbGF0cGlja3I6IE9iamVjdDtcblx0cHJpdmF0ZSBfdGFiaW5kZXggPSAwO1xuXHRvblRvdWNoZWRGbjogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cblx0cHJpdmF0ZSBkZWZhdWx0RmxhdHBpY2tyT3B0aW9uczogRmxhdHBpY2tyT3B0aW9ucyA9IHtcblx0XHR3cmFwOiB0cnVlLFxuXHRcdGNsaWNrT3BlbnM6IHRydWUsXG5cdFx0b25DaGFuZ2U6ICggc2VsZWN0ZWREYXRlczogYW55ICkgPT4geyBcblx0XHRcdGNvbnNvbGUubG9nKCdzZWxlY3RnZWQgRGF0ZSBjaGFuZ2VkJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZERhdGVzKTtcblx0XHRcdHRoaXMud3JpdGVWYWx1ZSggc2VsZWN0ZWREYXRlcyApOyBcblx0XHRcdHRoaXMubmV3RGF0ZVNlbGVjdGVkLmVtaXQoc2VsZWN0ZWREYXRlcyk7XG5cdFx0fVxuXHR9O1xuXG5cdEBWaWV3Q2hpbGQoJ2ZsYXRwaWNrcicsIHtcblx0XHRzdGF0aWM6IHRydWVcblx0fSlcblx0ZmxhdHBpY2tyRWxlbWVudDogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGNvbmZpZzogRmxhdHBpY2tyT3B0aW9ucztcblxuXHRASW5wdXQoKVxuXHRwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJcIjtcblxuIFx0QElucHV0KClcblx0YWRkQ2xhc3M6IHN0cmluZyA9IFwiXCI7XG5cblx0QElucHV0KClcblx0c2V0RGF0ZTogc3RyaW5nIHwgRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRnZXQgdGFiaW5kZXgoKSB7IHJldHVybiB0aGlzLl90YWJpbmRleDsgfVxuXHRzZXQgdGFiaW5kZXgoIHRpOiBudW1iZXIgKSB7IHRoaXMuX3RhYmluZGV4ID0gTnVtYmVyKCB0aSApOyB9XG5cblx0QElucHV0KClcblx0aGlkZUJ1dHRvbiA9IGZhbHNlO1xuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblx0d3JpdGVWYWx1ZSggdmFsdWU6YW55ICkge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKCB2YWx1ZSApO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZSggZm46IGFueSApIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcblx0fVxuXG5cdHByb3BhZ2F0ZUNoYW5nZSA9ICggXzogYW55ICkgPT4ge307XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXHRzZXREYXRlRnJvbUlucHV0KCBkYXRlOiBhbnkgKSB7XG5cdFx0dGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrci5zZXREYXRlKCBkYXRlLCB0cnVlICk7XG5cdH1cblxuXHRzZXRBbHRJbnB1dFBsYWNlaG9sZGVyKCBwbGFjZWhvbGRlcjogc3RyaW5nICkge1xuXHRcdHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50Ll9mbGF0cGlja3IuYWx0SW5wdXQuc2V0QXR0cmlidXRlKCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlciApO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQnKTtcblx0XHRpZiggdGhpcy5jb25maWcgKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLmRlZmF1bHRGbGF0cGlja3JPcHRpb25zLCB0aGlzLmNvbmZpZyApO1xuXHRcdH1cblx0XHRpZiggdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZmxhdHBpY2tyICkge1xuXHRcdFx0dGhpcy5mbGF0cGlja3IgPSB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5mbGF0cGlja3IoIHRoaXMuZGVmYXVsdEZsYXRwaWNrck9wdGlvbnMgKTtcblx0XHR9XG5cdFx0Ly9pZiggdGhpcy5zZXREYXRlICkge1xuXHRcdFx0Ly90aGlzLnNldERhdGVGcm9tSW5wdXQoIHRoaXMuc2V0RGF0ZSApO1xuXHRcdC8vfVxuXHR9XG5cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0Y29uc29sZS5sb2coJ25nT25DaGFuZ2VzJyk7XG5cdFx0Y29uc29sZS5sb2coY2hhbmdlcyk7XG5cdFx0aWYoIHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50IFxuXHRcdFx0JiYgdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrciApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCBjaGFuZ2VzLmhhc093blByb3BlcnR5KCAnc2V0RGF0ZScgKSBcblx0XHRcdFx0XHQmJiBjaGFuZ2VzWyAnc2V0RGF0ZScgXS5jdXJyZW50VmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldERhdGVGcm9tSW5wdXQoIGNoYW5nZXNbICdzZXREYXRlJyBdLmN1cnJlbnRWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdGhpcy5jb25maWcuYWx0SW5wdXRcblx0XHRcdFx0XHQmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCAncGxhY2Vob2xkZXInICkgXG5cdFx0XHRcdFx0JiYgY2hhbmdlc1sgJ3BsYWNlaG9sZGVyJyBdLmN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QWx0SW5wdXRQbGFjZWhvbGRlciggY2hhbmdlc1sgJ3NldERhdGUnIF0uY3VycmVudFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHR9XG5cdFxuXHRvbkZvY3VzKGV2ZW50OiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZEZuKCk7XG5cdH1cbn1cbiJdfQ==