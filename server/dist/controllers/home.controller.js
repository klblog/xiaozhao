"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const host_1 = require("../config/host");
const home_service_1 = require("../services/home.service");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    async getDetail(req) {
        const res = this.homeService.getHomeDetailMd();
        return res;
    }
    async setDetail(body) {
        const res = this.homeService.setHomeDetailMd(body);
        return res;
    }
};
exports.HomeController = HomeController;
__decorate([
    (0, common_1.Get)('/detail'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getDetail", null);
__decorate([
    (0, common_1.Post)('/detailSetting'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "setDetail", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)({ host: host_1.env.base, path: '/api/home' }),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
//# sourceMappingURL=home.controller.js.map