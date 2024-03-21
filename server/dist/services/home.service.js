"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs_1 = require("fs");
const matter = require("gray-matter");
const help_1 = require("../utils/help");
let HomeService = class HomeService {
    getHomeDetailMd() {
        try {
            const basePath = (0, path_1.join)(__dirname, '../', '../', '../README.md');
            const md = (0, fs_1.readFileSync)(basePath, 'utf-8');
            const { data, content } = matter(md);
            return {
                title: data.bannerBrand.title,
                description: data.bannerBrand.description,
                tagline: data.bannerBrand.tagline,
                buttons: data.bannerBrand.buttons,
                features: data.features,
                content
            };
        }
        catch (error) {
            throw new common_1.HttpException('获取失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    setHomeDetailMd(options) {
        try {
            const basePath = (0, path_1.join)(__dirname, '../', '../', '../README.md');
            const mds = (0, fs_1.readFileSync)(basePath, 'utf-8');
            const { data } = matter(mds);
            const newData = {
                ...data,
                bannerBrand: {
                    bgImage: data.bannerBrand.bgImage,
                    title: options.title,
                    description: options.description,
                    tagline: options.tagline,
                    buttons: options.buttons,
                },
            };
            if ((0, help_1.notNull)(data.features)) {
                newData.features = data.features;
            }
            const newMds = matter.stringify(options.content, newData);
            (0, fs_1.writeFileSync)(basePath, newMds);
        }
        catch (error) {
            throw new common_1.HttpException('设置失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return '设置完成';
    }
};
exports.HomeService = HomeService;
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)()
], HomeService);
//# sourceMappingURL=home.service.js.map