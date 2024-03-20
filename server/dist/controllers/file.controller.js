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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const host_1 = require("../config/host");
const file_service_1 = require("../services/file.service");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getFile(req) {
        const res = this.fileService.getFileInjectable();
        return res;
    }
    async createFolder(body, req) {
        const bodyKeys = Object.keys(body);
        if (bodyKeys.length !== 2 || !bodyKeys.includes('originName') || !bodyKeys.includes('newName')) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.fileService.createFolderInjectable(body.originName, body.newName);
        return res;
    }
    async updateFile(body, req) {
        console.log(body);
        return '创建成功';
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "getFile", null);
__decorate([
    (0, common_1.Post)('/create/folder'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Post)('/update/file'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "updateFile", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Controller)({ host: host_1.env.base, path: '/api/blogs' }),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map