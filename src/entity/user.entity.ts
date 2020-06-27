import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User {
    
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