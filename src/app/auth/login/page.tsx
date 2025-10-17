"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, Form, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/hooks/useAuth";
import { LoginParams } from "@/types/auth";
import { useNavigate } from "@/hooks/useNavigate";
import { Terminal, AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function LoginPage() {
  const { login, loading, error } = useAuth();
  const { toHome } = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: LoginParams) => {
    const response = await login(data);
    if (response.status !== 200) return;
    toHome();
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <Card className="md:w-[350px] sm:w-[340px]">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to sign in
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  )}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  )}
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Spinner /> : "Sign In"}
              </Button>
              <Alert hidden={!error} variant="destructive">
                <AlertCircleIcon />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  the credentials are incorrect, please try again.
                </AlertDescription>
              </Alert>
            </CardFooter>
          </Card>
        </form>
      </main>
    </div>
  );
}
