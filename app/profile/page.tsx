"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profileFormSchema } from "@/schema/profile";
import { useAuthStore } from "@/store/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";




type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function ProfilePage() {
	const { user, isAuthenticated } = useAuthStore()
	const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
    });

	function onSubmit(data: ProfileFormValues) {
        console.log("submit data: ", data)
    }

	const handleCancel = () => {
        form.reset();
    };


	if (!isAuthenticated) return <div>Unauthorized</div>;
	if (user) {
		return (
			<div className="flex w-full h-full min-h-screen max-w-screen ">
				<h1 className="text-3xl font-bold">Profile</h1>				
				<Form {...form}>
					<Image src="https://picsum.photos/300?random=1" alt={user.name} width={64} height={64} className="rounded-lg size-16" />
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											// disabled={isLoading}
											placeholder="Username"
											{...form.register('username')}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											disabled={true}
											placeholder="m@example.com"
											className="invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-600 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-2 invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-600"
											{...form.register('email')}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid w-3/4 grid-cols-3 gap-10">
							<Button
								type="submit"
								// disabled={isLoading}
								className="flex disabled:bg-slate-200 disabled:cursor-not-allowed"
							>
								{/* {isLoading ? <Loader /> : 'Submit'} */}
								Submit
							</Button>
							<Button
								type="button"
								onClick={handleCancel}
								className="flex disabled:bg-slate-200 disabled:cursor-not-allowed"
							>
								Cancel
							</Button>
						</div>
					</form>
				</Form>
			</div>
		)
	}
}

