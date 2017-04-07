import { environment } from "../environments/environment";
export var Dao = (function () {
    function Dao() {
        this.base = environment.base;
    }
    Dao.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return Dao;
}());
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/app.dao.js.map