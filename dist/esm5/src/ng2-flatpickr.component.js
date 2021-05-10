import { __decorate } from "tslib";
import { EventEmitter, Output, Component, ViewChild, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
if (typeof window !== 'undefined') {
    require('flatpickr');
}
var Ng2FlatpickrComponent = /** @class */ (function () {
    function Ng2FlatpickrComponent() {
        var _this = this;
        this.newDateSelected = new EventEmitter();
        this._tabindex = 0;
        this.onTouchedFn = function () { };
        this.defaultFlatpickrOptions = {
            wrap: true,
            clickOpens: true,
            onChange: function (selectedDates) {
                console.log('selectged Date changed');
                console.log(selectedDates);
                _this.writeValue(selectedDates);
                _this.newDateSelected.emit(selectedDates);
            }
        };
        this.placeholder = "";
        this.addClass = "";
        this.hideButton = false;
        this.propagateChange = function (_) { };
    }
    Ng2FlatpickrComponent_1 = Ng2FlatpickrComponent;
    Object.defineProperty(Ng2FlatpickrComponent.prototype, "tabindex", {
        get: function () { return this._tabindex; },
        set: function (ti) { this._tabindex = Number(ti); },
        enumerable: true,
        configurable: true
    });
    ///////////////////////////////////
    Ng2FlatpickrComponent.prototype.writeValue = function (value) {
        this.propagateChange(value);
    };
    Ng2FlatpickrComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Ng2FlatpickrComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedFn = fn;
    };
    ///////////////////////////////////
    Ng2FlatpickrComponent.prototype.setDateFromInput = function (date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    };
    Ng2FlatpickrComponent.prototype.setAltInputPlaceholder = function (placeholder) {
        this.flatpickrElement.nativeElement._flatpickr.altInput.setAttribute('placeholder', placeholder);
    };
    Ng2FlatpickrComponent.prototype.ngAfterViewInit = function () {
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
    };
    Ng2FlatpickrComponent.prototype.ngOnChanges = function (changes) {
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
    };
    Ng2FlatpickrComponent.prototype.onFocus = function (event) {
        this.onTouchedFn();
    };
    var Ng2FlatpickrComponent_1;
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
            template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input *ngIf=\"!hideButton\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" (focus)=\"onFocus($event)\" data-input>\n\t\t\t<input *ngIf=\"hideButton\" maxLength=\"5\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" (focus)=\"onFocus($event)\" data-input>\n\t\t\t\t\t\t\t\t\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return Ng2FlatpickrComponent_1; }),
                    multi: true
                }
            ]
        })
    ], Ng2FlatpickrComponent);
    return Ng2FlatpickrComponent;
}());
export { Ng2FlatpickrComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZsYXRwaWNrci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZmxhdHBpY2tyLyIsInNvdXJjZXMiOlsic3JjL25nMi1mbGF0cGlja3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLekUsSUFBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUM7SUFDN0IsT0FBTyxDQUFFLFdBQVcsQ0FBRSxDQUFDO0NBQzFCO0FBb0JEO0lBQUE7UUFBQSxpQkF1R0M7UUFyR1csb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBYSxjQUFRLENBQUMsQ0FBQztRQUUxQiw0QkFBdUIsR0FBcUI7WUFDbkQsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsVUFBRSxhQUFrQjtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFFLGFBQWEsQ0FBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDO1NBQ0QsQ0FBQztRQVdGLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFVdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWdCbkIsb0JBQWUsR0FBRyxVQUFFLENBQU0sSUFBTyxDQUFDLENBQUM7SUErQ3BDLENB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QUd6QjtRQURDLEtBQUssRUFBRTs4REFDaUI7SUFHekI7UUFERSxLQUFLLEVBQUU7MkRBQ2E7SUFHdEI7UUFEQyxLQUFLLEVBQUU7MERBQ2U7SUFHdkI7UUFEQyxLQUFLLEVBQUU7eURBQ2lDO0lBSXpDO1FBREMsS0FBSyxFQUFFOzZEQUNXO0lBeENQLHFCQUFxQjtRQWxCakMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLDhnQkFPUjtZQUNGLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFFLGNBQU0sT0FBQSx1QkFBcUIsRUFBckIsQ0FBcUIsQ0FBRTtvQkFDdEQsS0FBSyxFQUFFLElBQUk7aUJBQ1g7YUFDRDtTQUNELENBQUM7T0FDVyxxQkFBcUIsQ0F1R2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXZHWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE91dHB1dCxDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmxhdHBpY2tyT3B0aW9ucyB9IGZyb20gJy4vZmxhdHBpY2tyLW9wdGlvbnMuaW50ZXJmYWNlJztcblxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xuXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgcmVxdWlyZSggJ2ZsYXRwaWNrcicgKTtcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmcyLWZsYXRwaWNrcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cIm5nMi1mbGF0cGlja3ItaW5wdXQtY29udGFpbmVyXCIgI2ZsYXRwaWNrcj5cblx0XHRcdDxpbnB1dCAqbmdJZj1cIiFoaWRlQnV0dG9uXCIgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0IHt7IGFkZENsYXNzIH19XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3RhYmluZGV4XT1cInRhYmluZGV4XCIgdHlwZT1cInRleHRcIiAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgZGF0YS1pbnB1dD5cblx0XHRcdDxpbnB1dCAqbmdJZj1cImhpZGVCdXR0b25cIiBtYXhMZW5ndGg9XCI1XCIgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0IHt7IGFkZENsYXNzIH19XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3RhYmluZGV4XT1cInRhYmluZGV4XCIgdHlwZT1cInRleHRcIiAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgZGF0YS1pbnB1dD5cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCAoKSA9PiBOZzJGbGF0cGlja3JDb21wb25lbnQgKSxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkZsYXRwaWNrckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuXG4gIEBPdXRwdXQoKSBuZXdEYXRlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblx0cHVibGljIGZsYXRwaWNrcjogT2JqZWN0O1xuXHRwcml2YXRlIF90YWJpbmRleCA9IDA7XG5cdG9uVG91Y2hlZEZuOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuXHRwcml2YXRlIGRlZmF1bHRGbGF0cGlja3JPcHRpb25zOiBGbGF0cGlja3JPcHRpb25zID0ge1xuXHRcdHdyYXA6IHRydWUsXG5cdFx0Y2xpY2tPcGVuczogdHJ1ZSxcblx0XHRvbkNoYW5nZTogKCBzZWxlY3RlZERhdGVzOiBhbnkgKSA9PiB7IFxuXHRcdFx0Y29uc29sZS5sb2coJ3NlbGVjdGdlZCBEYXRlIGNoYW5nZWQnKTtcblx0XHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0ZXMpO1xuXHRcdFx0dGhpcy53cml0ZVZhbHVlKCBzZWxlY3RlZERhdGVzICk7IFxuXHRcdFx0dGhpcy5uZXdEYXRlU2VsZWN0ZWQuZW1pdChzZWxlY3RlZERhdGVzKTtcblx0XHR9XG5cdH07XG5cblx0QFZpZXdDaGlsZCgnZmxhdHBpY2tyJywge1xuXHRcdHN0YXRpYzogdHJ1ZVxuXHR9KVxuXHRmbGF0cGlja3JFbGVtZW50OiBhbnk7XG5cblx0QElucHV0KClcblx0Y29uZmlnOiBGbGF0cGlja3JPcHRpb25zO1xuXG5cdEBJbnB1dCgpXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlwiO1xuXG4gXHRASW5wdXQoKVxuXHRhZGRDbGFzczogc3RyaW5nID0gXCJcIjtcblxuXHRASW5wdXQoKVxuXHRzZXREYXRlOiBzdHJpbmcgfCBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGdldCB0YWJpbmRleCgpIHsgcmV0dXJuIHRoaXMuX3RhYmluZGV4OyB9XG5cdHNldCB0YWJpbmRleCggdGk6IG51bWJlciApIHsgdGhpcy5fdGFiaW5kZXggPSBOdW1iZXIoIHRpICk7IH1cblxuXHRASW5wdXQoKVxuXHRoaWRlQnV0dG9uID0gZmFsc2U7XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXHR3cml0ZVZhbHVlKCB2YWx1ZTphbnkgKSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UoIHZhbHVlICk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKCBmbjogYW55ICkge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuXHR9XG5cblx0cHJvcGFnYXRlQ2hhbmdlID0gKCBfOiBhbnkgKSA9PiB7fTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cdHNldERhdGVGcm9tSW5wdXQoIGRhdGU6IGFueSApIHtcblx0XHR0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5fZmxhdHBpY2tyLnNldERhdGUoIGRhdGUsIHRydWUgKTtcblx0fVxuXG5cdHNldEFsdElucHV0UGxhY2Vob2xkZXIoIHBsYWNlaG9sZGVyOiBzdHJpbmcgKSB7XG5cdFx0dGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrci5hbHRJbnB1dC5zZXRBdHRyaWJ1dGUoICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyICk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3SW5pdCcpO1xuXHRcdGlmKCB0aGlzLmNvbmZpZyApIHtcblx0XHRcdE9iamVjdC5hc3NpZ24oIHRoaXMuZGVmYXVsdEZsYXRwaWNrck9wdGlvbnMsIHRoaXMuY29uZmlnICk7XG5cdFx0fVxuXHRcdGlmKCB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5mbGF0cGlja3IgKSB7XG5cdFx0XHR0aGlzLmZsYXRwaWNrciA9IHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50LmZsYXRwaWNrciggdGhpcy5kZWZhdWx0RmxhdHBpY2tyT3B0aW9ucyApO1xuXHRcdH1cblx0XHQvL2lmKCB0aGlzLnNldERhdGUgKSB7XG5cdFx0XHQvL3RoaXMuc2V0RGF0ZUZyb21JbnB1dCggdGhpcy5zZXREYXRlICk7XG5cdFx0Ly99XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcblx0XHRjb25zb2xlLmxvZygnbmdPbkNoYW5nZXMnKTtcblx0XHRjb25zb2xlLmxvZyhjaGFuZ2VzKTtcblx0XHRpZiggdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgXG5cdFx0XHQmJiB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5fZmxhdHBpY2tyICkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoICdzZXREYXRlJyApIFxuXHRcdFx0XHRcdCYmIGNoYW5nZXNbICdzZXREYXRlJyBdLmN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0ZUZyb21JbnB1dCggY2hhbmdlc1sgJ3NldERhdGUnIF0uY3VycmVudFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB0aGlzLmNvbmZpZy5hbHRJbnB1dFxuXHRcdFx0XHRcdCYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoICdwbGFjZWhvbGRlcicgKSBcblx0XHRcdFx0XHQmJiBjaGFuZ2VzWyAncGxhY2Vob2xkZXInIF0uY3VycmVudFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBbHRJbnB1dFBsYWNlaG9sZGVyKCBjaGFuZ2VzWyAnc2V0RGF0ZScgXS5jdXJyZW50VmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdH1cblx0XG5cdG9uRm9jdXMoZXZlbnQ6IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkRm4oKTtcblx0fVxufVxuIl19