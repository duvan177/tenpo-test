"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/store/authStore";

export function Header() {
  const { logout } = useAuth();
  const { user } = useAuthStore();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-semibold text-gray-900">Tenpo test</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-gray-600">{user?.email?.split("@")[0]}</span>
            <Button
              onClick={logout}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
