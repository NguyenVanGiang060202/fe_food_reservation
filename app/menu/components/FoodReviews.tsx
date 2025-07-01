"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Star } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'


const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Trending", value: "trending" },
];

const filters = [
    { label: "1", icon: <Star />, value: "1" },
    { label: "2", icon: <Star />, value: "2" },
    { label: "3", icon: <Star />, value: "3" },
    { label: "4", icon: <Star />, value: "4" },
    { label: "5", icon: <Star />, value: "5" },
];

const reviews = [
    {
        id: "rev_1",
        user: {
            username: "John",
            avatar: "https://picsum.photos/100?random=1",
        },
        rating: 5.0,
        date: "2025-06-25",
        comment: "Amazing food and great service! Highly recommend.",
    },
    {
        id: "rev_2",
        user: {
            username: "Alice",
            avatar: "https://picsum.photos/100?random=2",
        },
        rating: 4.5,
        date: "2025-06-20",
        comment: "Really enjoyed the flavors, will come back again.",
    },
    {
        id: "rev_3",
        user: {
            username: "Bob",
            avatar: "https://picsum.photos/100?random=3",
        },
        rating: 3.0,
        date: "2025-06-18",
        comment: "It was okay, but could use some improvement on seasoning.",
    },
    {
        id: "rev_4",
        user: {
            username: "Eve",
            avatar: "https://picsum.photos/100?random=4",
        },
        rating: 4.0,
        date: "2025-06-15",
        comment: "Good atmosphere and tasty dishes overall.",
    },
    {
        id: "rev_5",
        user: {
            username: "Charlie",
            avatar: "https://picsum.photos/100?random=5",
        },
        rating: 2.5,
        date: "2025-06-12",
        comment: "Service was slow and the food was average.",
    },
    {
        id: "rev_6",
        user: {
            username: "Diana",
            avatar: "https://picsum.photos/100?random=6",
        },
        rating: 3.5,
        date: "2025-06-10",
        comment: "Decent place, some dishes were good, some not so much.",
    },
    {
        id: "rev_7",
        user: {
            username: "Frank",
            avatar: "https://picsum.photos/100?random=7",
        },
        rating: 5.0,
        date: "2025-06-08",
        comment: "One of the best dining experiences I've had in a while!",
    },
];




export default function FoodReviews() {
    const [sortFilter, setSortFilter] = useState(sortOptions[0].value);
    const [starFilter, setStarFilter] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(1);
    const visibleReviews = reviews.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 1);
    };

    return (
        <div className='w-full h-full space-y-4'>
            <h3 className='text-2xl font-semibold'>Reviews</h3>
            <div className="flex w-full gap-4">
                <Select value={sortFilter} onValueChange={setSortFilter}>
                    <SelectTrigger className="w-[180px] cursor-pointer text-base font-semibold flex items-center gap-2 bg-indigo-50 text-slate-800">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {sortOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {filters.map((filter) => (
                    <Badge
                        key={filter.value}
                        className={`cursor-pointer text-base font-semibold flex items-center gap-2 ${starFilter === filter.value ? "bg-indigo-500 text-white" : "bg-indigo-50 text-slate-800"}`}
                        onClick={() =>
                            setStarFilter(starFilter === filter.value ? null : filter.value)
                        }>
                        {filter.icon}
                        {filter.label}
                    </Badge>
                ))}
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                {visibleReviews.map((review) => (
                    <Card key={review.id} className='p-4 gap-2 w-full'>
                        <CardHeader className='flex w-full items-center justify-between'>
                            <div className="flex gap-2 justify-center items-center">
                                <Image src={review.user.avatar} alt={review.user.username} width={32} height={32} className="size-8 rounded-full" />
                                <div className="flex flex-col">
                                    <div className="font-bold">{review.user.username}</div>
                                    <div className="">{review.date}</div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <Star className='size-4 text-indigo-800' fill='currentColor' />
                                {review.rating}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{review.comment}</p>
                        </CardContent>
                    </Card>
                ))}
                {visibleCount < reviews.length && (
                    <Button
                        variant='outline'
                        onClick={handleShowMore}
                        className='w-fit h-fit !px-8 hover:bg-indigo-800 hover:text-indigo-50 text-lg transition-colors'
                    >
                        Xem thêm
                    </Button>
                )}
            </div>
        </div>
    )
}
