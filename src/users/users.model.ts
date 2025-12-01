
import { DataType, Table, Column, Model } from "sequelize-typescript";


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
}