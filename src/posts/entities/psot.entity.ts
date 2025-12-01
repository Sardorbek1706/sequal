import { Column, DataType, Table, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";

@Table({tableName: 'posts', paranoid: true, timestamps: true})
export class Post extends Model<Post> {
     @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4(),
        primaryKey: true
     })
     declare id: string

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     title: string

     @Column({
        type: DataType.STRING,
        allowNull: false
     })
     content: string


     @ForeignKey(() => User)
     @Column({
        type: DataType.UUID,
        allowNull: false
     })
     userId: string

     @BelongsTo(() => User)
     user: User
}   