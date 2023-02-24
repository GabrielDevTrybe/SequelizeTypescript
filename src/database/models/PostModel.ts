import { Model, INTEGER, STRING } from "sequelize";
import db from '.'

class Post extends Model {
  // Aqui estou declarando oq esta na migration CreatePostTable.
  declare readonly id: number;
  declare title: string;
  declare content: string;
}

Post.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  title: {
    allowNull: true,
    type: STRING
  },
  content: {
    allowNull: false,
    type: STRING
  }
}, {
  sequelize: db,
  //underscored é pra setar tudo em snake_case;
  underscored: true,
  //timestamps gera parametro de data que gera automaticamante. Aqui vou desativar
  timestamps: false,
  // Aqui eu especifico de qual tabela que é essa model
  modelName: 'posts'
});

export default Post;