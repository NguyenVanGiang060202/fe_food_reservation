"use client"
import { useAuthStore } from "@/store/auth-store";

export default function ProfilePage() {
	const { user, isAuthenticated } = useAuthStore()
	console.log('Profile data:', user);
	if (!isAuthenticated) return <div>Unauthorized</div>;
	if (user) {
		return <div>Hello, {user.name}</div>;
	}
}

