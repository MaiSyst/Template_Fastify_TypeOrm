import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class LoginModel{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    email!:string
    @Column()
    password!: string
}

export default LoginModel