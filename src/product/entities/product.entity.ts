import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("Products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    // pics: { 
    //     main: string;
    //     others: string[]
    // };

    @Column()
    pic: string;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    price: string;

    @Column("text", { array: true })
    colors: string[];

    @Column("text", { array: true })
    sizes: string[];

    @Column()
    code: string;

    @Column()
    composition: string;

    @Column()
    material: string;

    @Column()
    season: string;

    @Column()
    specs: string;
    
    @Column()
    left_in_stock: number;
}
