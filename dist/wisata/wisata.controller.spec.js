"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const wisata_controller_1 = require("./wisata.controller");
const wisata_service_1 = require("./wisata.service");
describe('WisataController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [wisata_controller_1.WisataController],
            providers: [wisata_service_1.WisataService],
        }).compile();
        controller = module.get(wisata_controller_1.WisataController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=wisata.controller.spec.js.map