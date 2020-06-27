import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;
    
    @Column()
    age: number;

    @Column("text")
    gender: string;

    @Column()
    isActive: boolean;
}

export default UserEntity;