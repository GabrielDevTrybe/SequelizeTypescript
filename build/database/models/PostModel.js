"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    title: {
        allowNull: true,
        type: sequelize_1.STRING
    },
    content: {
        allowNull: false,
        type: sequelize_1.STRING
    }
}, {
    sequelize: _1.default,
    //underscored é pra setar tudo em snake_case;
    underscored: true,
    //timestamps gera parametro de data que gera automaticamante. Aqui vou desativar
    timestamps: false,
    // Aqui eu especifico de qual tabela que é essa model
    modelName: 'posts'
});
exports.default = Post;
