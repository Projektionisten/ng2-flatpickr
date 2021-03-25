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
            template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input *ngIf=\"!hideButton\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" (focus)=\"onFocus($event)\" data-input>\n\t\t\t<input *ngIf=\"hideButton\" maxLength=\"4\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" (focus)=\"onFocus($event)\" data-input>\n\t\t\t\t\t\t\t\t\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZsYXRwaWNrci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZmxhdHBpY2tyLyIsInNvdXJjZXMiOlsic3JjL25nMi1mbGF0cGlja3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLekUsSUFBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUM7SUFDN0IsT0FBTyxDQUFFLFdBQVcsQ0FBRSxDQUFDO0NBQzFCO0FBb0JEO0lBQUE7UUFBQSxpQkF1R0M7UUFyR1csb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdEIsZ0JBQVcsR0FBYSxjQUFRLENBQUMsQ0FBQztRQUUxQiw0QkFBdUIsR0FBcUI7WUFDbkQsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsVUFBRSxhQUFrQjtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFFLGFBQWEsQ0FBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDO1NBQ0QsQ0FBQztRQVdGLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFVdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWdCbkIsb0JBQWUsR0FBRyxVQUFFLENBQU0sSUFBTyxDQUFDLENBQUM7SUErQ3BDLENB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RSxJQUFJO1NBQ1osQ0FBQzttRUFDb0I7SUFHdEI7UUFEQyxLQUFLLEVBQUU7eURBQ2lCO0lBR3pCO1FBREMsS0FBSyxFQUFFOzhEQUNpQjtJQUd6QjtRQURFLEtBQUssRUFBRTsyREFDYTtJQUd0QjtRQURDLEtBQUssRUFBRTswREFDZTtJQUd2QjtRQURDLEtBQUssRUFBRTt5REFDaUM7SUFJekM7UUFEQyxLQUFLLEVBQUU7NkRBQ1c7SUF4Q1AscUJBQXFCO1FBbEJqQyxTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsOGdCQU9SO1lBQ0YsU0FBUyxFQUFFO2dCQUNWO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUUsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFFO29CQUN0RCxLQUFLLEVBQUUsSUFBSTtpQkFDWDthQUNEO1NBQ0QsQ0FBQztPQUNXLHFCQUFxQixDQXVHakM7SUFBRCw0QkFBQztDQUFBLEFBdkdELElBdUdDO1NBdkdZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT3V0cHV0LENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGbGF0cGlja3JPcHRpb25zIH0gZnJvbSAnLi9mbGF0cGlja3Itb3B0aW9ucy5pbnRlcmZhY2UnO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5cbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICByZXF1aXJlKCAnZmxhdHBpY2tyJyApO1xufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZzItZmxhdHBpY2tyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwibmcyLWZsYXRwaWNrci1pbnB1dC1jb250YWluZXJcIiAjZmxhdHBpY2tyPlxuXHRcdFx0PGlucHV0ICpuZ0lmPVwiIWhpZGVCdXR0b25cIiBjbGFzcz1cIm5nMi1mbGF0cGlja3ItaW5wdXQge3sgYWRkQ2xhc3MgfX1cIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbdGFiaW5kZXhdPVwidGFiaW5kZXhcIiB0eXBlPVwidGV4dFwiIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiBkYXRhLWlucHV0PlxuXHRcdFx0PGlucHV0ICpuZ0lmPVwiaGlkZUJ1dHRvblwiIG1heExlbmd0aD1cIjRcIiBjbGFzcz1cIm5nMi1mbGF0cGlja3ItaW5wdXQge3sgYWRkQ2xhc3MgfX1cIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbdGFiaW5kZXhdPVwidGFiaW5kZXhcIiB0eXBlPVwidGV4dFwiIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiBkYXRhLWlucHV0PlxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdGAsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoICgpID0+IE5nMkZsYXRwaWNrckNvbXBvbmVudCApLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRmxhdHBpY2tyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG5cbiAgQE91dHB1dCgpIG5ld0RhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHRwdWJsaWMgZmxhdHBpY2tyOiBPYmplY3Q7XG5cdHByaXZhdGUgX3RhYmluZGV4ID0gMDtcblx0b25Ub3VjaGVkRm46IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG5cdHByaXZhdGUgZGVmYXVsdEZsYXRwaWNrck9wdGlvbnM6IEZsYXRwaWNrck9wdGlvbnMgPSB7XG5cdFx0d3JhcDogdHJ1ZSxcblx0XHRjbGlja09wZW5zOiB0cnVlLFxuXHRcdG9uQ2hhbmdlOiAoIHNlbGVjdGVkRGF0ZXM6IGFueSApID0+IHsgXG5cdFx0XHRjb25zb2xlLmxvZygnc2VsZWN0Z2VkIERhdGUgY2hhbmdlZCcpO1xuXHRcdFx0Y29uc29sZS5sb2coc2VsZWN0ZWREYXRlcyk7XG5cdFx0XHR0aGlzLndyaXRlVmFsdWUoIHNlbGVjdGVkRGF0ZXMgKTsgXG5cdFx0XHR0aGlzLm5ld0RhdGVTZWxlY3RlZC5lbWl0KHNlbGVjdGVkRGF0ZXMpO1xuXHRcdH1cblx0fTtcblxuXHRAVmlld0NoaWxkKCdmbGF0cGlja3InLCB7XG5cdFx0c3RhdGljOiB0cnVlXG5cdH0pXG5cdGZsYXRwaWNrckVsZW1lbnQ6IGFueTtcblxuXHRASW5wdXQoKVxuXHRjb25maWc6IEZsYXRwaWNrck9wdGlvbnM7XG5cblx0QElucHV0KClcblx0cGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XG5cbiBcdEBJbnB1dCgpXG5cdGFkZENsYXNzOiBzdHJpbmcgPSBcIlwiO1xuXG5cdEBJbnB1dCgpXG5cdHNldERhdGU6IHN0cmluZyB8IERhdGU7XG5cblx0QElucHV0KClcblx0Z2V0IHRhYmluZGV4KCkgeyByZXR1cm4gdGhpcy5fdGFiaW5kZXg7IH1cblx0c2V0IHRhYmluZGV4KCB0aTogbnVtYmVyICkgeyB0aGlzLl90YWJpbmRleCA9IE51bWJlciggdGkgKTsgfVxuXG5cdEBJbnB1dCgpXG5cdGhpZGVCdXR0b24gPSBmYWxzZTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cdHdyaXRlVmFsdWUoIHZhbHVlOmFueSApIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSggdmFsdWUgKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoIGZuOiBhbnkgKSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG91Y2hlZEZuID0gZm47XG5cdH1cblxuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoIF86IGFueSApID0+IHt9O1xuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblx0c2V0RGF0ZUZyb21JbnB1dCggZGF0ZTogYW55ICkge1xuXHRcdHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50Ll9mbGF0cGlja3Iuc2V0RGF0ZSggZGF0ZSwgdHJ1ZSApO1xuXHR9XG5cblx0c2V0QWx0SW5wdXRQbGFjZWhvbGRlciggcGxhY2Vob2xkZXI6IHN0cmluZyApIHtcblx0XHR0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5fZmxhdHBpY2tyLmFsdElucHV0LnNldEF0dHJpYnV0ZSggJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIgKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnbmdBZnRlclZpZXdJbml0Jyk7XG5cdFx0aWYoIHRoaXMuY29uZmlnICkge1xuXHRcdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5kZWZhdWx0RmxhdHBpY2tyT3B0aW9ucywgdGhpcy5jb25maWcgKTtcblx0XHR9XG5cdFx0aWYoIHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50LmZsYXRwaWNrciApIHtcblx0XHRcdHRoaXMuZmxhdHBpY2tyID0gdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZmxhdHBpY2tyKCB0aGlzLmRlZmF1bHRGbGF0cGlja3JPcHRpb25zICk7XG5cdFx0fVxuXHRcdGlmKCB0aGlzLnNldERhdGUgKSB7XG5cdFx0XHR0aGlzLnNldERhdGVGcm9tSW5wdXQoIHRoaXMuc2V0RGF0ZSApO1xuXHRcdH1cblx0fVxuXG5cdG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzICkge1xuXHRcdGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlcycpO1xuXHRcdGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuXHRcdGlmKCB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudCBcblx0XHRcdCYmIHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50Ll9mbGF0cGlja3IgKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiggY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSggJ3NldERhdGUnICkgXG5cdFx0XHRcdFx0JiYgY2hhbmdlc1sgJ3NldERhdGUnIF0uY3VycmVudFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXREYXRlRnJvbUlucHV0KCBjaGFuZ2VzWyAnc2V0RGF0ZScgXS5jdXJyZW50VmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHRoaXMuY29uZmlnLmFsdElucHV0XG5cdFx0XHRcdFx0JiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSggJ3BsYWNlaG9sZGVyJyApIFxuXHRcdFx0XHRcdCYmIGNoYW5nZXNbICdwbGFjZWhvbGRlcicgXS5jdXJyZW50VmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEFsdElucHV0UGxhY2Vob2xkZXIoIGNoYW5nZXNbICdwbGFjZWhvbGRlcicgXS5jdXJyZW50VmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdH1cblx0XG5cdG9uRm9jdXMoZXZlbnQ6IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkRm4oKTtcblx0fVxufVxuIl19