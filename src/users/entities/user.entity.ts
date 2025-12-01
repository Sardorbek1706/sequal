import { DataType, Table, Column, Model, HasMany } from "sequelize-typescript";
import { Post } from "src/posts/entities/post.entity";

@Table({tableName: "users", paranoid: true, timestamps: true})

export class User extends Model<User>{
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
    username: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email : string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    age: number

    @HasMany(() => Post)
    post: Post
}