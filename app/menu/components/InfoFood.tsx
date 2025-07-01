"use client"
import { Button } from '@/components/ui/button'
import { Clock, MessageSquareMore, Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import FoodReviews from './FoodReviews'
import { Input } from '@/components/ui/input'


const foodDetails = {
    id: 'noodle_chicken',
    name: 'Mì Gà',
    image: 'https://picsum.photos/1000',
    price: 40000,
    description: 'A delicious noodle dish with tender chicken pieces, served in a flavorful broth.',
    rating: 4.5,
    time: '30 minutes',
    noOfReview: 120,
}


export default function InfoFood() {

    const [value, setValue] = useState('0');
    const min = 0;
    const max = 100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (/^\d*$/.test(val)) {
            if (val === '') {
                setValue('');
                return;
            }

            const num = Number(val);
            if (num < 0) {
                setValue('0');
            }
            else if (num > 100) {
                setValue('100');
            }
            else {
                setValue(val);
            }
        }
    }

    const handleIncrement = () => {
        const num = Number(value || '0');
        const next = Math.min(num + 1, max);
        setValue(next.toString());
    };

    const handleDecrement = () => {
        const num = Number(value || '0');
        const next = Math.max(num - 1, min);
        setValue(next.toString());
    };


    return (
        <div className='relative w-full h-full flex flex-col justify-between items-center min-h-screen'>
            <div className=" w-full h-full flex flex-col items-center">
                <Image src={foodDetails.image} alt={foodDetails.name} width={256} height={256} className="w-full h-64 flex justify-center items-center rounded-none" />
                <div className="w-full p-8 space-y-4">
                    <div className="flex w-full justify-between items-center ">
                        <h2 className="text-4xl font-semibold text-indigo-800">{foodDetails.name}</h2>
                        <p className="text-4xl font-semibold text-indigo-800">{foodDetails.price} VND</p>
                    </div>
                    <p className="">{foodDetails.description}</p>
                    <div className="flex w-full justify-between items-center bg-indigo-800 rounded-lg py-4">
                        <div className="flex flex-col items-center gap-2 text-indigo-50 justify-center w-full -mx-4">
                            <div className="flex items-center gap-2">
                                <Star className='size-6 text-indigo-50' />
                                <span className='text-indigo-50 font-bold text-lg'>{foodDetails.rating}</span>
                            </div>
                            Rating
                        </div>
                        <div className="flex flex-col items-center gap-2 text-white justify-center w-full border-x-2">
                            <div className="flex items-center gap-2">
                                <Clock className='size-6 text-indigo-50' />
                                <span className='text-indigo-50 font-bold text-lg'>{foodDetails.time}</span>
                            </div>
                            Delivery
                        </div>
                        <div className="flex flex-col items-center gap-2 text-white justify-center w-full -mx-4">
                            <div className="flex items-center gap-2">
                                <MessageSquareMore className='size-6 text-indigo-50' />
                                <span className='text-indigo-50 font-bold text-lg'>{foodDetails.noOfReview}</span>
                            </div>
                            Reviews
                        </div>
                    </div>
                    <FoodReviews />
                </div>
            </div>
            <div className="w-full h-full flex sticky bottom-4 left-0 justify-center items-center px-8 gap-4 ">
                <div className="w-full h-full flex justify-center items-center bg-indigo-50 rounded-lg p-4 gap-8">
                    <Button variant="outline" className='w-1/2 h-fit !px-8 hover:bg-indigo-50 bg-indigo-800 hover:text-indigo-800 text-indigo-50 text-lg transition-colors'>
                        <ShoppingCart className='size-8' />
                        Add your cart
                    </Button>
                    <div className="w-1/2 h-full flex justify-between items-center">
                        <Button variant="ghost" className='!p-0' onClick={handleDecrement}>
                            <Minus size={40} className='size-10 text-indigo-800' />
                        </Button>
                        <Input
                            type="text"
                            value={value}
                            pattern="[0-9]*"
                            onChange={handleChange}
                            className='w-16 p-0 text-indigo-800 !text-3xl border-none shadow-none focus-visible:border-none focus-visible:ring-0 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [moz-appearance:textfield]'>
                        </Input>
                        <Button variant="ghost" className='!p-0' onClick={handleIncrement}>
                            <Plus size={40} className='size-10 text-indigo-800' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
