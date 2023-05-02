import Link from "next/link";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <main className="relative flex flex-col flex-1 px-4 py-8 overflow-hidden sm:px-6 lg:px-8">
      <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-bg"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
        </svg>
      </div>
      <div className="relative flex flex-col items-center justify-center flex-1 pt-12 pb-16">
        <Link href="/">
          <img src="/images/logos/acp-logo.png" alt="" />
        </Link>
        <h1 className="sr-only">Log in</h1>
        <form action="/login" className="flex flex-col w-full max-w-sm mt-6">
          <div className="mb-6">
            <label
              for="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full h-10 px-3 mt-2 bg-white shadow-sm appearance-none text-slate-900 sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
              autoComplete="false"
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full h-10 px-3 mt-2 bg-white shadow-sm appearance-none text-slate-900 sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
            />
          </div>
          <Button type="submit" intent="secondary" width="full">
            <span>Sign in to account</span>
          </Button>
          <input type="hidden" name="remember" value="true" />
          <p className="mt-8 text-center">
            <a href="/password/reset" className="text-sm hover:underline">
              Forgot password?
            </a>
          </p>
        </form>
      </div>
      <footer className="relative shrink-0">
        <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
          <p className="text-center sm:text-left">Don't have an account?</p>
          <Link
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
            href="/register"
          >
            <span>
              Sign up <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
