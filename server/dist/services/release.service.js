"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const child_process_1 = require("child_process");
let ReleaseService = class ReleaseService {
    async releaseVuepress() {
        try {
            const basePath = (0, path_1.join)(__dirname, '../', '../deploy');
            const filePath = (0, path_1.join)(basePath, 'release.sh');
            const res = await this.exec(filePath);
            return `发布成功：${res}`;
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    exec(command) {
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(`sh ${command}`, (error, stdout, stderr) => {
                console.log(error);
                if (error) {
                    reject(error);
                }
                else if (stderr) {
                    reject(new Error(stderr));
                }
                else {
                    resolve(stdout);
                }
            });
        });
    }
};
exports.ReleaseService = ReleaseService;
exports.ReleaseService = ReleaseService = __decorate([
    (0, common_1.Injectable)()
], ReleaseService);
//# sourceMappingURL=release.service.js.map