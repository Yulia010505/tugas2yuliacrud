"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const wisata_service_1 = require("./wisata.service");
describe('WisataService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [wisata_service_1.WisataService],
        }).compile();
        service = module.get(wisata_service_1.WisataService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=wisata.service.spec.js.map