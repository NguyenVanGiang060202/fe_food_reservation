'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { menuSchema } from '@/schema/menu';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';


type searchMenu = z.infer<typeof menuSchema>;


export default function SearchMenu() {
    const form = useForm<searchMenu>({
        resolver: zodResolver(menuSchema),
        defaultValues: {
            name: '',
        },
    });
    return (
        <div className="w-full h-full flex items-center justify-between">
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl className=''>
                                <div className="relative ">
                                    <Search className="absolute h-6 w-6 text-muted-foreground top-4" />
                                    <Input placeholder="Search..." {...field} className="pl-8 h-14 !text-lg border-none shadow-none focus-visible:border-none focus-visible:ring-0"/>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    )
}
