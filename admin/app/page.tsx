"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { singIn } from "./dashboard/auth/sing-in";

export default function Home() {
  return (
    <div className="w-360 mx-auto h-screen flex justify-between">
      <div>
        <SignIn />
      </div>
      <div className="w-225 overflow-hidden rounded-4xl">
        <img
          src="/images/img.svg"
          height="100%"
          width="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
}

const SignIn = () => {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    };
    try {
      const data = await singIn(credentials);

      localStorage.setItem("token", data?.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-100">
      <Input
        placeholder="email"
        type="email"
        value={email}
        onChange={(event) => SetEmail(event.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button onClick={onSubmit}>Sign in</Button>
    </div>
  );
};
