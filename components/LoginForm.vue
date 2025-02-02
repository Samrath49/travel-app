<template>
  <div class="relative my-6">
    <input
      id="id-b10"
      type="email"
      name="id-b10"
      placeholder="Your email"
      value="John@Smith."
      class="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
    />
    <label
      for="id-b10"
      class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
    >
      Your email
    </label>
    <small
      class="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-red-500"
    >
      <span>Text field with helper text</span>
      <span class="text-slate-500">1/10</span>
    </small>
  </div>

  <div class="relative my-6">
    <input
      id="id-b14"
      type="password"
      value="123456"
      name="id-b14"
      placeholder="your password"
      class="relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
    />
    <label
      for="id-b14"
      class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
    >
      Your password
    </label>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-labelledby="title-2 description-2"
      role="graphics-symbol"
    >
      <title id="title-2">Check mark icon</title>
      <desc id="description-2">Icon description here</desc>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
    <small
      class="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-red-500"
    >
      <span>Text field with helper text</span>
      <span class="text-slate-500">1/10</span>
    </small>
  </div>
</template>
