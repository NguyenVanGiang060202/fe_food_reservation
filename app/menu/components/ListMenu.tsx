import React, { JSX } from 'react'
import { Card } from '@/components/ui/card';
import { GiChiliPepper, GiCupcake, GiFruitBowl, GiMeal } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import type { Category, CategoryId, } from '@/types/listMenu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';



const categories: Category[] = [
    {
        id: 'main',
        name: 'Main Menu',
        items: [
            { id: 'rice_beef', name: 'Cơm Thịt Bò', image: 'https://picsum.photos/200?random=1', price: 50000 },
            { id: 'noodle_chicken', name: 'Mì Gà', image: 'https://picsum.photos/200?random=2', price: 40000 },
        ],
    },
    {
        id: 'special',
        name: 'Special Menu',
        items: [
            { id: 'chef_choice', name: 'Món Đặc Biệt', image: 'https://picsum.photos/200?random=3', price: 50000 },
            { id: 'seafood_plate', name: 'Hải Sản Tổng Hợp', image: 'https://picsum.photos/200?random=4', price: 50000 },
        ],
    },
    {
        id: 'spicy',
        name: 'Spicy Menu',
        items: [
            { id: 'spicy_noodle', name: 'Mì Cay', image: 'https://picsum.photos/200?random=5', price: 30000 },
            { id: 'hot_wings', name: 'Cánh Gà Cay', image: 'https://picsum.photos/200?random=6', price: 70000 },
        ],
    },
    {
        id: 'sweet',
        name: 'Sweet Menu',
        items: [
            { id: 'che_thai', name: 'Chè Thái', image: 'https://picsum.photos/200?random=7', price: 35000 },
            { id: 'pudding', name: 'Pudding Trái Cây', image: 'https://picsum.photos/200?random=8', price: 55000 },
        ],
    },
    {
        id: 'healthy',
        name: 'Healthy Menu',
        items: [
            { id: 'salad', name: 'Salad Rau Củ', image: 'https://picsum.photos/200?random=9', price: 75000 },
            { id: 'boiled_egg', name: 'Trứng Luộc', image: 'https://picsum.photos/200?random=10', price: 30000 },
        ],
    },
];


const iconMap: Record<CategoryId, JSX.Element> = {
    main: <GiMeal className="w-6 h-6" />,
    special: <FaStar className="w-6 h-6" />,
    spicy: <GiChiliPepper className="w-6 h-6" />,
    sweet: <GiCupcake className="w-6 h-6" />,
    healthy: <GiFruitBowl className="w-6 h-6" />,
}

export default function ListMenu() {
    return (
        <div className="w-full h-full min-h-screen flex flex-col gap-8">
            <div className="text-2xl font-bold">Menu List</div>
            <Accordion type="multiple" className='w-full h-full space-y-4 rounded-lg'>
                {categories.map((category) => (
                    <AccordionItem key={category.id} value={category.id} className='border-b-0'>
                        <Card className='w-full h-full p-4 flex flex-col gap-2 hover:bg-indigo-800 hover:text-white py-0 group transition-colors'>
                            <AccordionTrigger className="hover:no-underline flex justify-between items-center w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex justify-center items-center gap-6">
                                        <div className="bg-indigo-50 text-indigo-800 rounded-lg p-2 group-hover:text-indigo-50 group-hover:bg-indigo-500">{iconMap[category.id] || <GiMeal className="w-6 h-6" />}</div>
                                        <p className='text-lg font-semibold'>{category.name}</p>
                                    </div>
                                    <div className="font-normal">
                                        {category.items.length} items
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="w-full h-full flex flex-col justify-center items-start space-y-2">
                                    {category.items.map((item) => (
                                        <div key={item.id} className="w-full flex items-center justify-between p-4 hover:bg-indigo-50 hover:text-slate-800 rounded-lg transition-colors">
                                            <div className="flex items-center gap-4">
                                                <Image src={item.image} alt={item.name} width={64} height={64} className="size-16 rounded-lg" />
                                                <span className="font-semibold text-base">{item.name}</span>
                                            </div>
                                            <p>{item.price} VND</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </Card>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
