'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from "react"
import { Loader } from "lucide-react"
import { useAuthStore } from "@/store/auth-store"


const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(7),
});

type LoginFormValues = z.infer<typeof formSchema>;

export default function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { setUser } = useAuthStore()
	const router = useRouter()

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});


	const onSubmit = async (values: z.infer<typeof formSchema>) => {

		try {
			setIsLoading(true);
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			})
			if (response.ok) {
				const data = await response.json();
				setUser(data.data);
				router.push('/profile')
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
												placeholder="example@gmal.com"
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
						<Link
							rel="help"
							href="/forgotpassword"
							className="-my-2 text-xs text-right underline"
						>
							Quên mật khẩu?
						</Link>
						<div>
							{error && <p className="text-red-600">{error}</p>}
						</div>
						<Button
							disabled={isLoading}
							className="w-full mt-5"
							type="submit"
						>
							{isLoading ? (
								<Loader />
							) : (
								'Đăng nhập'
							)}
						</Button>
					</form>
				</Form>
				<div className="relative">
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
			</CardContent>
			<CardFooter className="grid gap-4">
				<div className="relative">
					<div className="absolute inset-0 flex items-center ">
						<span className="w-full px-2 border-t" />
					</div>
					<div className="relative flex justify-center px-2 text-xs uppercase">
						<span className="px-2 bg-background text-muted-foreground">
							Bạn chưa có tài khoản?
						</span>
						<Link
							rel="next"
							href="/signup"
							className="grid gap-2 pr-2 underline bg-background decoration-solid"
						>
							Đăng kí
						</Link>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
