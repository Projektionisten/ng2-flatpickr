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
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
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
                this.setAltInputPlaceholder(changes['placeholder'].currentValue);
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
            template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input *ngIf=\"!hideButton\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" (focus)=\"onFocus($event)\" data-input>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZsYXRwaWNrci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZmxhdHBpY2tyLyIsInNvdXJjZXMiOlsic3JjL25nMi1mbGF0cGlja3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLekUsSUFBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUM7SUFDN0IsT0FBTyxDQUFFLFdBQVcsQ0FBRSxDQUFDO0NBQzFCO0FBa0JEO0lBQUE7UUFBQSxpQkF1R0M7UUFyR1csb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBYSxjQUFRLENBQUMsQ0FBQztRQUUxQiw0QkFBdUIsR0FBcUI7WUFDbkQsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsVUFBRSxhQUFrQjtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFFLGFBQWEsQ0FBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDO1NBQ0QsQ0FBQztRQVdGLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFVdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWdCbkIsb0JBQWUsR0FBRyxVQUFFLENBQU0sSUFBTyxDQUFDLENBQUM7SUErQ3BDLENB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RSxJQUFJO1NBQ1osQ0FBQzttRUFDb0I7SUFHdEI7UUFEQyxLQUFLLEVBQUU7eURBQ2lCO0lBR3pCO1FBREMsS0FBSyxFQUFFOzhEQUNpQjtJQUd6QjtRQURFLEtBQUssRUFBRTsyREFDYTtJQUd0QjtRQURDLEtBQUssRUFBRTswREFDZTtJQUd2QjtRQURDLEtBQUssRUFBRTt5REFDaUM7SUFJekM7UUFEQyxLQUFLLEVBQUU7NkRBQ1c7SUF4Q1AscUJBQXFCO1FBaEJqQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsZ1RBS1I7WUFDRixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBRSxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUU7b0JBQ3RELEtBQUssRUFBRSxJQUFJO2lCQUNYO2FBQ0Q7U0FDRCxDQUFDO09BQ1cscUJBQXFCLENBdUdqQztJQUFELDRCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0F2R1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPdXRwdXQsQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZsYXRwaWNrck9wdGlvbnMgfSBmcm9tICcuL2ZsYXRwaWNrci1vcHRpb25zLmludGVyZmFjZSc7XG5cbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcblxuaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHJlcXVpcmUoICdmbGF0cGlja3InICk7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25nMi1mbGF0cGlja3InLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0LWNvbnRhaW5lclwiICNmbGF0cGlja3I+XG5cdFx0XHQ8aW5wdXQgKm5nSWY9XCIhaGlkZUJ1dHRvblwiIGNsYXNzPVwibmcyLWZsYXRwaWNrci1pbnB1dCB7eyBhZGRDbGFzcyB9fVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFt0YWJpbmRleF09XCJ0YWJpbmRleFwiIHR5cGU9XCJ0ZXh0XCIgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiIGRhdGEtaW5wdXQ+XG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0YCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZiggKCkgPT4gTmcyRmxhdHBpY2tyQ29tcG9uZW50ICksXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZzJGbGF0cGlja3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcblxuICBAT3V0cHV0KCkgbmV3RGF0ZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdHB1YmxpYyBmbGF0cGlja3I6IE9iamVjdDtcblx0cHJpdmF0ZSBfdGFiaW5kZXggPSAwO1xuXHRvblRvdWNoZWRGbjogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cblx0cHJpdmF0ZSBkZWZhdWx0RmxhdHBpY2tyT3B0aW9uczogRmxhdHBpY2tyT3B0aW9ucyA9IHtcblx0XHR3cmFwOiB0cnVlLFxuXHRcdGNsaWNrT3BlbnM6IHRydWUsXG5cdFx0b25DaGFuZ2U6ICggc2VsZWN0ZWREYXRlczogYW55ICkgPT4geyBcblx0XHRcdGNvbnNvbGUubG9nKCdzZWxlY3RnZWQgRGF0ZSBjaGFuZ2VkJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZERhdGVzKTtcblx0XHRcdHRoaXMud3JpdGVWYWx1ZSggc2VsZWN0ZWREYXRlcyApOyBcblx0XHRcdHRoaXMubmV3RGF0ZVNlbGVjdGVkLmVtaXQoc2VsZWN0ZWREYXRlcyk7XG5cdFx0fVxuXHR9O1xuXG5cdEBWaWV3Q2hpbGQoJ2ZsYXRwaWNrcicsIHtcblx0XHRzdGF0aWM6IHRydWVcblx0fSlcblx0ZmxhdHBpY2tyRWxlbWVudDogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGNvbmZpZzogRmxhdHBpY2tyT3B0aW9ucztcblxuXHRASW5wdXQoKVxuXHRwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJcIjtcblxuIFx0QElucHV0KClcblx0YWRkQ2xhc3M6IHN0cmluZyA9IFwiXCI7XG5cblx0QElucHV0KClcblx0c2V0RGF0ZTogc3RyaW5nIHwgRGF0ZTtcblxuXHRASW5wdXQoKVxuXHRnZXQgdGFiaW5kZXgoKSB7IHJldHVybiB0aGlzLl90YWJpbmRleDsgfVxuXHRzZXQgdGFiaW5kZXgoIHRpOiBudW1iZXIgKSB7IHRoaXMuX3RhYmluZGV4ID0gTnVtYmVyKCB0aSApOyB9XG5cblx0QElucHV0KClcblx0aGlkZUJ1dHRvbiA9IGZhbHNlO1xuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblx0d3JpdGVWYWx1ZSggdmFsdWU6YW55ICkge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKCB2YWx1ZSApO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZSggZm46IGFueSApIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcblx0fVxuXG5cdHByb3BhZ2F0ZUNoYW5nZSA9ICggXzogYW55ICkgPT4ge307XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXHRzZXREYXRlRnJvbUlucHV0KCBkYXRlOiBhbnkgKSB7XG5cdFx0dGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrci5zZXREYXRlKCBkYXRlLCB0cnVlICk7XG5cdH1cblxuXHRzZXRBbHRJbnB1dFBsYWNlaG9sZGVyKCBwbGFjZWhvbGRlcjogc3RyaW5nICkge1xuXHRcdHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50Ll9mbGF0cGlja3IuYWx0SW5wdXQuc2V0QXR0cmlidXRlKCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlciApO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQnKTtcblx0XHRpZiggdGhpcy5jb25maWcgKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLmRlZmF1bHRGbGF0cGlja3JPcHRpb25zLCB0aGlzLmNvbmZpZyApO1xuXHRcdH1cblx0XHRpZiggdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZmxhdHBpY2tyICkge1xuXHRcdFx0dGhpcy5mbGF0cGlja3IgPSB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5mbGF0cGlja3IoIHRoaXMuZGVmYXVsdEZsYXRwaWNrck9wdGlvbnMgKTtcblx0XHR9XG5cdFx0aWYoIHRoaXMuc2V0RGF0ZSApIHtcblx0XHRcdHRoaXMuc2V0RGF0ZUZyb21JbnB1dCggdGhpcy5zZXREYXRlICk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkNoYW5nZXMoIGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMgKSB7XG5cdFx0Y29uc29sZS5sb2coJ25nT25DaGFuZ2VzJyk7XG5cdFx0Y29uc29sZS5sb2coY2hhbmdlcyk7XG5cdFx0aWYoIHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50IFxuXHRcdFx0JiYgdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrciApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCBjaGFuZ2VzLmhhc093blByb3BlcnR5KCAnc2V0RGF0ZScgKSBcblx0XHRcdFx0XHQmJiBjaGFuZ2VzWyAnc2V0RGF0ZScgXS5jdXJyZW50VmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldERhdGVGcm9tSW5wdXQoIGNoYW5nZXNbICdzZXREYXRlJyBdLmN1cnJlbnRWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggdGhpcy5jb25maWcuYWx0SW5wdXRcblx0XHRcdFx0XHQmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCAncGxhY2Vob2xkZXInICkgXG5cdFx0XHRcdFx0JiYgY2hhbmdlc1sgJ3BsYWNlaG9sZGVyJyBdLmN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QWx0SW5wdXRQbGFjZWhvbGRlciggY2hhbmdlc1sgJ3BsYWNlaG9sZGVyJyBdLmN1cnJlbnRWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblx0fVxuXHRcblx0b25Gb2N1cyhldmVudDogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWRGbigpO1xuXHR9XG59XG4iXX0=