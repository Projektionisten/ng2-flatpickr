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
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
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
                this.setAltInputPlaceholder(changes['placeholder'].currentValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZsYXRwaWNrci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZmxhdHBpY2tyLyIsInNvdXJjZXMiOlsic3JjL25nMi1mbGF0cGlja3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pFLElBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDO0lBQzdCLE9BQU8sQ0FBRSxXQUFXLENBQUUsQ0FBQztDQUMxQjtBQW9CRCxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBcUI7SUFBbEM7UUFFWSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFN0MsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUN0QixnQkFBVyxHQUFhLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUxQiw0QkFBdUIsR0FBcUI7WUFDbkQsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsQ0FBRSxhQUFrQixFQUFHLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBRSxhQUFhLENBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQztTQUNELENBQUM7UUFXRixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBVXRCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFnQm5CLG9CQUFl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QUM7K0RBQ29CO0FBR3RCO0lBREMsS0FBSyxFQUFFO3FEQUNpQjtBQUd6QjtJQURDLEtBQUssRUFBRTswREFDaUI7QUFHekI7SUFERSxLQUFLLEVBQUU7dURBQ2E7QUFHdEI7SUFEQyxLQUFLLEVBQUU7c0RBQ2U7QUFHdkI7SUFEQyxLQUFLLEVBQUU7cURBQ2lDO0FBSXpDO0lBREMsS0FBSyxFQUFFO3lEQUNXO0FBeENQLHFCQUFxQjtJQWxCakMsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFOzs7Ozs7O0dBT1I7UUFDRixTQUFTLEVBQUU7WUFDVjtnQkFDQyxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFFLEdBQUcsRUFBRSxDQUFDLHVCQUFxQixDQUFFO2dCQUN0RCxLQUFLLEVBQUUsSUFBSTthQUNYO1NBQ0Q7S0FDRCxDQUFDO0dBQ1cscUJBQXFCLENBdUdqQztTQXZHWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE91dHB1dCxDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmxhdHBpY2tyT3B0aW9ucyB9IGZyb20gJy4vZmxhdHBpY2tyLW9wdGlvbnMuaW50ZXJmYWNlJztcblxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xuXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgcmVxdWlyZSggJ2ZsYXRwaWNrcicgKTtcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmcyLWZsYXRwaWNrcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cIm5nMi1mbGF0cGlja3ItaW5wdXQtY29udGFpbmVyXCIgI2ZsYXRwaWNrcj5cblx0XHRcdDxpbnB1dCAqbmdJZj1cIiFoaWRlQnV0dG9uXCIgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0IHt7IGFkZENsYXNzIH19XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3RhYmluZGV4XT1cInRhYmluZGV4XCIgdHlwZT1cInRleHRcIiAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgZGF0YS1pbnB1dD5cblx0XHRcdDxpbnB1dCAqbmdJZj1cImhpZGVCdXR0b25cIiBtYXhMZW5ndGg9XCI1XCIgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0IHt7IGFkZENsYXNzIH19XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3RhYmluZGV4XT1cInRhYmluZGV4XCIgdHlwZT1cInRleHRcIiAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgZGF0YS1pbnB1dD5cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCAoKSA9PiBOZzJGbGF0cGlja3JDb21wb25lbnQgKSxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkZsYXRwaWNrckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuXG4gIEBPdXRwdXQoKSBuZXdEYXRlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIGZsYXRwaWNrcjogT2JqZWN0O1xuXHRwcml2YXRlIF90YWJpbmRleCA9IDA7XG5cdG9uVG91Y2hlZEZuOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuXHRwcml2YXRlIGRlZmF1bHRGbGF0cGlja3JPcHRpb25zOiBGbGF0cGlja3JPcHRpb25zID0ge1xuXHRcdHdyYXA6IHRydWUsXG5cdFx0Y2xpY2tPcGVuczogdHJ1ZSxcblx0XHRvbkNoYW5nZTogKCBzZWxlY3RlZERhdGVzOiBhbnkgKSA9PiB7IFxuXHRcdFx0Y29uc29sZS5sb2coJ3NlbGVjdGdlZCBEYXRlIGNoYW5nZWQnKTtcblx0XHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZXMpO1xuXHRcdFx0dGhpcy53cml0ZVZhbHVlKCBzZWxlY3RlZERhdGVzICk7IFxuXHRcdFx0dGhpcy5uZXdEYXRlU2VsZWN0ZWQuZW1pdChzZWxlY3RlZERhdGVzKTtcblx0XHR9XG5cdH07XG5cblx0QFZpZXdDaGlsZCgnZmxhdHBpY2tyJywge1xuXHRcdHN0YXRpYzogdHJ1ZVxuXHR9KVxuXHRmbGF0cGlja3JFbGVtZW50OiBhbnk7XG5cblx0QElucHV0KClcblx0Y29uZmlnOiBGbGF0cGlja3JPcHRpb25zO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xuXG4gXHRASW5wdXQoKVxuXHRhZGRDbGFzczogc3RyaW5nID0gXCJcIjtcblxuXHRASW5wdXQoKVxuXHRzZXREYXRlOiBzdHJpbmcgfCBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGdldCB0YWJpbmRleCgpIHsgcmV0dXJuIHRoaXMuX3RhYmluZGV4OyB9XG5cdHNldCB0YWJpbmRleCggdGk6IG51bWJlciApIHsgdGhpcy5fdGFiaW5kZXggPSBOdW1iZXIoIHRpICk7IH1cblxuXHRASW5wdXQoKVxuXHRoaWRlQnV0dG9uID0gZmFsc2U7XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXHR3cml0ZVZhbHVlKCB2YWx1ZTphbnkgKSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UoIHZhbHVlICk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKCBmbjogYW55ICkge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuXHR9XG5cblx0cHJvcGFnYXRlQ2hhbmdlID0gKCBfOiBhbnkgKSA9PiB7fTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cdHNldERhdGVGcm9tSW5wdXQoIGRhdGU6IGFueSApIHtcblx0XHR0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5fZmxhdHBpY2tyLnNldERhdGUoIGRhdGUsIHRydWUgKTtcblx0fVxuXG5cdHNldEFsdElucHV0UGxhY2Vob2xkZXIoIHBsYWNlaG9sZGVyOiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrci5hbHRJbnB1dC5zZXRBdHRyaWJ1dGUoICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyICk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3SW5pdCcpO1xuXHRcdGlmKCB0aGlzLmNvbmZpZyApIHtcblx0XHRcdE9iamVjdC5hc3NpZ24oIHRoaXMuZGVmYXVsdEZsYXRwaWNrck9wdGlvbnMsIHRoaXMuY29uZmlnICk7XG5cdFx0fVxuXHRcdGlmKCB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5mbGF0cGlja3IgKSB7XG5cdFx0XHR0aGlzLmZsYXRwaWNrciA9IHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50LmZsYXRwaWNrciggdGhpcy5kZWZhdWx0RmxhdHBpY2tyT3B0aW9ucyApO1xuXHRcdH1cblx0XHRpZiggdGhpcy5zZXREYXRlICkge1xuXHRcdFx0dGhpcy5zZXREYXRlRnJvbUlucHV0KCB0aGlzLnNldERhdGUgKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjb25zb2xlLmxvZygnbmdPbkNoYW5nZXMnKTtcblx0XHRjb25zb2xlLmxvZyhjaGFuZ2VzKTtcblx0XHRpZiggdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgXG5cdFx0XHQmJiB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5fZmxhdHBpY2tyICkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoICdzZXREYXRlJyApIFxuXHRcdFx0XHRcdCYmIGNoYW5nZXNbICdzZXREYXRlJyBdLmN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0ZUZyb21JbnB1dCggY2hhbmdlc1sgJ3NldERhdGUnIF0uY3VycmVudFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0aGlzLmNvbmZpZy5hbHRJbnB1dFxuXHRcdFx0XHRcdCYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoICdwbGFjZWhvbGRlcicgKSBcblx0XHRcdFx0XHQmJiBjaGFuZ2VzWyAncGxhY2Vob2xkZXInIF0uY3VycmVudFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBbHRJbnB1dFBsYWNlaG9sZGVyKCBjaGFuZ2VzWyAncGxhY2Vob2xkZXInIF0uY3VycmVudFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHR9XG5cdFxuXHRvbkZvY3VzKGV2ZW50OiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZEZuKCk7XG5cdH1cbn1cbiJdfQ==