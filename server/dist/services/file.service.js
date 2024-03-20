"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const matter = require("gray-matter");
let FileService = class FileService {
    getFileInjectable() {
        const paths = (0, path_1.join)(__dirname, '../', '../', '../blogs');
        const folders = (0, fs_1.readdirSync)(paths, { withFileTypes: true });
        const files = folders.filter(item => item.isDirectory()).map(item => ({ name: item.name, children: this.getMarkdownFiles((0, path_1.join)(paths, item.name)) }));
        return files;
    }
    getMarkdownFiles(dir) {
        const folders = (0, fs_1.readdirSync)(dir);
        const mds = folders.filter(item => item.endsWith('.md')).map(item => {
            const content = (0, fs_1.readFileSync)((0, path_1.join)(dir, item), 'utf-8');
            const { data, content: body } = matter(content);
            return {
                title: data.title,
                tags: data.tags.filter((item) => item),
                author: data.author,
                date: data.date,
                content: body,
                categories: item.replace('md', '')
            };
        });
        return mds;
    }
    async createFolderInjectable(originFolderName, folderName) {
        const basePath = (0, path_1.join)(__dirname, '../', '../', '../blogs');
        const originPath = (0, path_1.join)(basePath, originFolderName);
        const newPath = (0, path_1.join)(basePath, folderName);
        if (!originFolderName) {
            try {
                await fs_1.promises.mkdir(newPath);
                return '创建成功';
            }
            catch (error) {
                throw new common_1.HttpException('创建失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        try {
            await fs_1.promises.access(originPath);
        }
        catch (error) {
            throw new common_1.HttpException('原始文件夹不存在', common_1.HttpStatus.NOT_FOUND);
        }
        if (!folderName && originFolderName) {
            try {
                await fs_1.promises.rm(originPath, { recursive: true });
                return '删除成功';
            }
            catch (error) {
                throw new common_1.HttpException('删除失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        try {
            await fs_1.promises.rename(originPath, newPath);
            return '修改成功';
        }
        catch (error) {
            throw new common_1.HttpException('修改失败', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    createMarkdownFileInjectable(options) {
        const { title, tags, date, content, categories } = options;
        const basePath = (0, path_1.join)(__dirname, '../', '../', '../blogs');
        const folderPath = (0, path_1.join)(basePath, categories);
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map