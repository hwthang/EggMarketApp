export type User = {
    status: string | undefined,
    name:string | undefined,
    gender:string | undefined,
    phone: string | undefined,
    password: string |undefined,
    role: string|undefined,
    profile_picture: string,
    address: string,
    created_at: Date,
    update_at:Date
}

export type Product = {
    
    product_id: string;
    name: string;
    description: string; 
    unit_sold: string;
    price: number;
    images: {
      image: string;
    }[];
    origin: string;
    created_at: Date;
    updated_at: Date;
    categories: string,
    sales_count: number;
  }