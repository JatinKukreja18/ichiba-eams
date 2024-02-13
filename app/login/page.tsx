import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-2 md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-blue-900 p-2 ">
          <h1 className="text-lg tracking-wide font-bold text-center md:w-36">ICHIBA</h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
