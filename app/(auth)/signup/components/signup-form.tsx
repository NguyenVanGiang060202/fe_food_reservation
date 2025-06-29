'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Loader } from 'lucide-react'
import Link from 'next/link'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signupFormSchema } from '@/schema/auth'


type signupFormValues = z.infer<typeof signupFormSchema>;

export default function SignupForm() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const form = useForm<signupFormValues>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            email: '',
            password: '',
            username: '',
            phone: '',
            confirmpassword: '',
        },
    });


    const onSubmit = async (values: z.infer<typeof signupFormSchema>) => {

        try {
            setIsLoading(true);
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })
            if (response.ok) {
                
            } else {
                setError("Sai thông tin đăng nhập. Vui lòng thử lại.");
            }
        }
        catch (error) {
            console.error('Login error:', error);
            setError('Đăng nhập thất bại. Vui lòng thử lại sau.');
        }
        finally {
            setIsLoading(false);
        }
    }


    return (
        <Card>
            <CardContent className="grid gap-4 pt-4">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="after:content-['_*'] after:text-red-600 pb-1">
                                            User name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={
                                                    isLoading
                                                }
                                                placeholder="e.g. Bonnie Green"
                                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-2 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-600"
                                                {...form.register(
                                                    'username'
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="after:content-['_*'] after:text-red-600 pb-1">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={
                                                    isLoading
                                                }
                                                placeholder="m@example.com"
                                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-2 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-600"
                                                {...form.register(
                                                    'email'
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="after:content-['_*'] after:text-red-600 pb-1">
                                            Phone number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={
                                                    isLoading
                                                }
                                                placeholder="e.g. Bonnie Green"
                                                className="invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-2 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-600"
                                                {...form.register(
                                                    'phone'
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="after:content-['_*'] after:text-red-600 pb-1">
                                            Mật khẩu
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={
                                                    isLoading
                                                }
                                                placeholder="••••••••"
                                                type="password"
                                                {...form.register(
                                                    'password'
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="confirmpassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="after:content-['_*'] after:text-red-600 pb-1">
                                            Mật khẩu
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={
                                                    isLoading
                                                }
                                                placeholder="••••••••"
                                                type="password"
                                                {...form.register(
                                                    'password'
                                                )}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            disabled={isLoading}
                            className="w-full mt-5"
                            type="submit"
                        >
                            {isLoading ? <Loader /> : 'Đăng kí'}
                        </Button>
                    </form>
                </Form>
                <div className="relative px-4">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 bg-background text-muted-foreground">
                            Hoặc tiếp tục với
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <Button
                        disabled={isLoading}
                        variant="outline"
                    >
                        Github
                    </Button>
                    <Button
                        disabled={isLoading}
                        variant="outline"
                    >
                        Google
                    </Button>
                </div>
                <div className="relative px-4">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                </div>
                <Link
                    rel="stylesheet"
                    href="\login"
                    className="grid gap-2"
                >
                    <Button type="button">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Trở lại trang đăng nhập
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
