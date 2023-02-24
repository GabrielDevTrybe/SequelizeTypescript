import { Model, INTEGER, STRING } from "sequelize";
import db from '.'

class Comment extends Model {
  // Aqui estou declarando oq esta na migration CreatePostTable.
  declare readonly id: number;
  declare content: string;
  declare postId: number;
}

Comment.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  content: {
    allowNull: false,
    type: STRING
  },
  postId: {
    allowNull: false,
    field: 'post_id',
    type: INTEGER,
    },
}, {
  sequelize: db,
  //underscored é pra setar tudo em snake_case;
  underscored: true,
  //timestamps gera parametro de data que gera automaticamante. Aqui vou desativar
  timestamps: false,
  // Aqui eu especifico de qual tabela que é essa model
  modelName: 'comments'
});

export default Comment;