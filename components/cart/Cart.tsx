import React from 'react'
import { Card } from '../ui/card';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

const orderDetail = {
    id: 1,
    items: [
        {
            id: 'rice_beef',
            name: 'Cơm Thịt Bò',
            image: 'https://picsum.photos/200?random=1',
            price: 50000,
            quantity: 2,
        },
        {
            id: 'bun_thit_nuong',
            name: 'Bún Thịt Nướng',
            image: 'https://picsum.photos/200?random=2',
            price: 45000,
            quantity: 1,
        },
        {
            id: 'tra_sua_tran_chau',
            name: 'Trà Sữa Trân Châu',
            image: 'https://picsum.photos/200?random=3',
            price: 30000,
            quantity: 2,
        },
        {
            id: 'goi_cuon_tom_thit',
            name: 'Gỏi Cuốn Tôm Thịt',
            image: 'https://picsum.photos/200?random=4',
            price: 40000,
            quantity: 1,
        },
    ],
    totalQuantity: 6,
    total: 50000 * 2 + 45000 * 1 + 30000 * 2 + 40000 * 1, // = 245000
};


export default function Cart() {
    return (
        <div className='absolute z-1 top-0 right-0 w-[470px] h-full flex flex-col justify-start items-start min-h-screen p-8'>
            <h2 className='py-4 text-2xl font-bold'>Details</h2>
            <div className="flex items-center justify-between w-full py-4">
                <h3 className='text-lg font-bold'>Order Number</h3>
                <div className="text-lg font-bold">{orderDetail.id}</div>
            </div>
            <Separator />
            <div className="flex flex-col items-center justify-center w-full">
                {orderDetail.items.map((item) => (
                    <Card key={item.id} className='flex flex-row items-center justify-start w-full border-0 shadow-none'>
                        <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-lg size-16" />
                        <div className="w-full font-bold">{item.name}</div>
                        <div className="w-full">{item.quantity}x</div>
                        <div className="w-full">{item.price} VND</div>
                    </Card>
                ))}
            </div>
            <Separator />
            <div className="flex items-center justify-between w-full py-4">
                <h3 className='text-lg font-bold'>Total</h3>
                <h3 className='text-lg font-bold'>{orderDetail.total} VND</h3>
            </div>
            <Button variant="outline" className='w-full text-lg transition-colors bg-indigo-800 h-14 hover:bg-indigo-50 hover:text-indigo-800 text-indigo-50'>
                {/* <ShoppingCart className='size-8' /> */}
                Comfirm payment
            </Button>
        </div>
    )
}
