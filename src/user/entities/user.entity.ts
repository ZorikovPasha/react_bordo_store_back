import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { IsEmail } from "class-validator"

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;
  
  @Column()
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date; 

  @UpdateDateColumn({ type: "timestamp" })
  updated_at?: Date;
}
