import { async, TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
describe('BadgeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BadgeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/workspace/sequence-ui/src/app/home/badge/badge.component.spec.js.map