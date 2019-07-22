import * as tslib_1 from "tslib";
import { Component, ViewChild, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
if (typeof window !== 'undefined') {
    require('flatpickr');
}
var Ng2FlatpickrComponent = /** @class */ (function () {
    function Ng2FlatpickrComponent() {
        var _this = this;
        this._tabindex = 0;
        this.defaultFlatpickrOptions = {
            wrap: true,
            clickOpens: true,
            onChange: function (selectedDates) { _this.writeValue(selectedDates); }
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
    Ng2FlatpickrComponent.prototype.registerOnTouched = function () { };
    ///////////////////////////////////
    Ng2FlatpickrComponent.prototype.setDateFromInput = function (date) {
        this.flatpickrElement.nativeElement._flatpickr.setDate(date, true);
    };
    Ng2FlatpickrComponent.prototype.setAltInputPlaceholder = function (placeholder) {
        this.flatpickrElement.nativeElement._flatpickr.altInput.setAttribute('placeholder', placeholder);
    };
    Ng2FlatpickrComponent.prototype.ngAfterViewInit = function () {
        if (this.config) {
            Object.assign(this.defaultFlatpickrOptions, this.config);
        }
        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr(this.defaultFlatpickrOptions);
        if (this.setDate) {
            this.setDateFromInput(this.setDate);
        }
    };
    Ng2FlatpickrComponent.prototype.ngOnChanges = function (changes) {
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
    var Ng2FlatpickrComponent_1;
    tslib_1.__decorate([
        ViewChild('flatpickr', {
            static: true
        }),
        tslib_1.__metadata("design:type", Object)
    ], Ng2FlatpickrComponent.prototype, "flatpickrElement", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2FlatpickrComponent.prototype, "config", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], Ng2FlatpickrComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], Ng2FlatpickrComponent.prototype, "addClass", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2FlatpickrComponent.prototype, "setDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], Ng2FlatpickrComponent.prototype, "tabindex", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], Ng2FlatpickrComponent.prototype, "hideButton", void 0);
    Ng2FlatpickrComponent = Ng2FlatpickrComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ng2-flatpickr',
            template: "\n\t\t<div class=\"ng2-flatpickr-input-container\" #flatpickr>\n\t\t\t<input *ngIf=\"!hideButton\" class=\"ng2-flatpickr-input {{ addClass }}\" [placeholder]=\"placeholder\" [tabindex]=\"tabindex\" type=\"text\" data-input>\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t\t",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZsYXRwaWNrci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZmxhdHBpY2tyLyIsInNvdXJjZXMiOlsic3JjL25nMi1mbGF0cGlja3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pFLElBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFDO0lBQzdCLE9BQU8sQ0FBRSxXQUFXLENBQUUsQ0FBQztDQUMxQjtBQWtCRDtJQWhCQTtRQUFBLGlCQXFHQztRQWxGUyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWYsNEJBQXVCLEdBQXFCO1lBQ25ELElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLFVBQUUsYUFBa0IsSUFBUSxLQUFJLENBQUMsVUFBVSxDQUFFLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQztTQUN6RSxDQUFDO1FBV0YsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQVV0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBY25CLG9CQUFlLEdBQUcsVUFBRSxDQUFNLElBQU8sQ0FBQyxDQUFDO0lBc0NwQyxDQUFDOzhCQXJGWSxxQkFBcUI7SUE2QmhDLHNCQUFJLDJDQUFRO2FBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN6QyxVQUFjLEVBQVUsSUFBSyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUM7OztPQURwQjtJQU0xQyxtQ0FBbUM7SUFFbkMsMENBQVUsR0FBVixVQUFZLEtBQVM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWtCLEVBQU87UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlEQUFpQixHQUFqQixjQUFxQixDQUFDO0lBSXRCLG1DQUFtQztJQUVuQyxnREFBZ0IsR0FBaEIsVUFBa0IsSUFBUztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxzREFBc0IsR0FBdEIsVUFBd0IsV0FBbUI7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBRSxhQUFhLEVBQUUsV0FBVyxDQUFFLENBQUM7SUFDcEcsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFDQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUc7WUFDakIsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsdUJBQXVCLENBQUUsQ0FBQztRQUMvRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUc7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztTQUN0QztJQUNGLENBQUM7SUFFRCwyQ0FBVyxHQUFYLFVBQWEsT0FBc0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtlQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRztZQUVuRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUUsU0FBUyxDQUFFO21CQUNuQyxPQUFPLENBQUUsU0FBUyxDQUFFLENBQUMsWUFBWSxFQUFHO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxDQUFFLFNBQVMsQ0FBRSxDQUFDLFlBQVksQ0FBRSxDQUFDO2FBQzNEO1lBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7bUJBQ3BCLE9BQU8sQ0FBQyxjQUFjLENBQUUsYUFBYSxDQUFFO21CQUN2QyxPQUFPLENBQUUsYUFBYSxDQUFFLENBQUMsWUFBWSxFQUFHO2dCQUMxQyxJQUFJLENBQUMsc0JBQXNCLENBQUUsT0FBTyxDQUFFLGFBQWEsQ0FBRSxDQUFDLFlBQVksQ0FBRSxDQUFDO2FBQ3JFO1NBQ0Y7SUFDSCxDQUFDOztJQXRFRDtRQUhDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDdkIsTUFBTSxFQUFFLElBQUk7U0FDWixDQUFDOzttRUFDb0I7SUFHdEI7UUFEQyxLQUFLLEVBQUU7O3lEQUNpQjtJQUd6QjtRQURDLEtBQUssRUFBRTs7OERBQ2lCO0lBR3pCO1FBREUsS0FBSyxFQUFFOzsyREFDYTtJQUd0QjtRQURDLEtBQUssRUFBRTs7MERBQ2U7SUFHdEI7UUFEQyxLQUFLLEVBQUU7Ozt5REFDaUM7SUFJMUM7UUFEQyxLQUFLLEVBQUU7OzZEQUNXO0lBakNQLHFCQUFxQjtRQWhCakMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLG9SQUtSO1lBQ0YsU0FBUyxFQUFFO2dCQUNWO29CQUNDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUUsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFFO29CQUN0RCxLQUFLLEVBQUUsSUFBSTtpQkFDWDthQUNEO1NBQ0QsQ0FBQztPQUNXLHFCQUFxQixDQXFGakM7SUFBRCw0QkFBQztDQUFBLEFBckZELElBcUZDO1NBckZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRmxhdHBpY2tyT3B0aW9ucyB9IGZyb20gJy4vZmxhdHBpY2tyLW9wdGlvbnMuaW50ZXJmYWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIHJlcXVpcmUoICdmbGF0cGlja3InICk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbmcyLWZsYXRwaWNrcicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHRcdDxkaXYgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0LWNvbnRhaW5lclwiICNmbGF0cGlja3I+XHJcblx0XHRcdDxpbnB1dCAqbmdJZj1cIiFoaWRlQnV0dG9uXCIgY2xhc3M9XCJuZzItZmxhdHBpY2tyLWlucHV0IHt7IGFkZENsYXNzIH19XCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3RhYmluZGV4XT1cInRhYmluZGV4XCIgdHlwZT1cInRleHRcIiBkYXRhLWlucHV0PlxyXG5cdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdGAsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7XHJcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZiggKCkgPT4gTmcyRmxhdHBpY2tyQ29tcG9uZW50ICksXHJcblx0XHRcdG11bHRpOiB0cnVlXHJcblx0XHR9XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmcyRmxhdHBpY2tyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIHB1YmxpYyBmbGF0cGlja3I6IE9iamVjdDtcclxuICBwcml2YXRlIF90YWJpbmRleCA9IDA7XHJcblxyXG5cdHByaXZhdGUgZGVmYXVsdEZsYXRwaWNrck9wdGlvbnM6IEZsYXRwaWNrck9wdGlvbnMgPSB7XHJcblx0XHR3cmFwOiB0cnVlLFxyXG5cdFx0Y2xpY2tPcGVuczogdHJ1ZSxcclxuXHRcdG9uQ2hhbmdlOiAoIHNlbGVjdGVkRGF0ZXM6IGFueSApID0+IHsgdGhpcy53cml0ZVZhbHVlKCBzZWxlY3RlZERhdGVzICk7IH1cclxuXHR9O1xyXG5cclxuXHRAVmlld0NoaWxkKCdmbGF0cGlja3InLCB7XHJcblx0XHRzdGF0aWM6IHRydWVcclxuXHR9KVxyXG5cdGZsYXRwaWNrckVsZW1lbnQ6IGFueTtcclxuXHJcblx0QElucHV0KClcclxuXHRjb25maWc6IEZsYXRwaWNrck9wdGlvbnM7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0cGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIEBJbnB1dCgpXHJcblx0YWRkQ2xhc3M6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cdEBJbnB1dCgpXHJcblx0c2V0RGF0ZTogc3RyaW5nIHwgRGF0ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdGFiaW5kZXgoKSB7IHJldHVybiB0aGlzLl90YWJpbmRleDsgfVxyXG4gIHNldCB0YWJpbmRleCggdGk6IG51bWJlciApIHsgdGhpcy5fdGFiaW5kZXggPSBOdW1iZXIoIHRpICk7IH1cclxuXHJcblx0QElucHV0KClcclxuXHRoaWRlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdHdyaXRlVmFsdWUoIHZhbHVlOmFueSApIHtcclxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKCB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0ZXJPbkNoYW5nZSggZm46IGFueSApIHtcclxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcblx0fVxyXG5cclxuXHRyZWdpc3Rlck9uVG91Y2hlZCgpIHt9XHJcblxyXG5cdHByb3BhZ2F0ZUNoYW5nZSA9ICggXzogYW55ICkgPT4ge307XHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdHNldERhdGVGcm9tSW5wdXQoIGRhdGU6IGFueSApIHtcclxuXHRcdHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50Ll9mbGF0cGlja3Iuc2V0RGF0ZSggZGF0ZSwgdHJ1ZSApO1xyXG5cdH1cclxuXHJcblx0c2V0QWx0SW5wdXRQbGFjZWhvbGRlciggcGxhY2Vob2xkZXI6IHN0cmluZyApIHtcclxuXHRcdHRoaXMuZmxhdHBpY2tyRWxlbWVudC5uYXRpdmVFbGVtZW50Ll9mbGF0cGlja3IuYWx0SW5wdXQuc2V0QXR0cmlidXRlKCAncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlciApO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0aWYoIHRoaXMuY29uZmlnICkge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLmRlZmF1bHRGbGF0cGlja3JPcHRpb25zLCB0aGlzLmNvbmZpZyApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5mbGF0cGlja3IgPSB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudC5mbGF0cGlja3IoIHRoaXMuZGVmYXVsdEZsYXRwaWNrck9wdGlvbnMgKTtcclxuXHRcdGlmKCB0aGlzLnNldERhdGUgKSB7XHJcblx0XHRcdHRoaXMuc2V0RGF0ZUZyb21JbnB1dCggdGhpcy5zZXREYXRlICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcyggY2hhbmdlczogU2ltcGxlQ2hhbmdlcyApIHtcclxuXHRcdGlmKCB0aGlzLmZsYXRwaWNrckVsZW1lbnQubmF0aXZlRWxlbWVudCBcclxuXHRcdFx0JiYgdGhpcy5mbGF0cGlja3JFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuX2ZsYXRwaWNrciApIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiggY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSggJ3NldERhdGUnICkgXHJcblx0XHRcdFx0XHQmJiBjaGFuZ2VzWyAnc2V0RGF0ZScgXS5jdXJyZW50VmFsdWUgKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0ZUZyb21JbnB1dCggY2hhbmdlc1sgJ3NldERhdGUnIF0uY3VycmVudFZhbHVlICk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCB0aGlzLmNvbmZpZy5hbHRJbnB1dFxyXG5cdFx0XHRcdFx0JiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSggJ3BsYWNlaG9sZGVyJyApIFxyXG5cdFx0XHRcdFx0JiYgY2hhbmdlc1sgJ3BsYWNlaG9sZGVyJyBdLmN1cnJlbnRWYWx1ZSApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRBbHRJbnB1dFBsYWNlaG9sZGVyKCBjaGFuZ2VzWyAncGxhY2Vob2xkZXInIF0uY3VycmVudFZhbHVlICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHR9XHJcbn1cclxuIl19