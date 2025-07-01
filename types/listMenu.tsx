export type CategoryId = 'main' | 'special' | 'spicy' | 'sweet' | 'healthy';

export type Item = {
    id: string;
    name: string;
    image: string; 
    price: number;
}

export type Category = {
    id: CategoryId;
    name: string;
    items: Item[];
};