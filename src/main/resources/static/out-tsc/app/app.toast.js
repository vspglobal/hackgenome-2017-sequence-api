var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ToastOptions } from "ng2-toastr";
export var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        _super.apply(this, arguments);
        this.positionClass = "toast-bottom-center";
        this.newestOnTop = true;
        this.showCloseButton = true;
    }
    return CustomOption;
}(ToastOptions));
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/app.toast.js.map