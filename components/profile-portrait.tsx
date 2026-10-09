import Image from 'next/image'

export function ProfilePortrait() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-600 to-blue-800 shadow-xl shadow-primary/20 ring-1 ring-border">
      <div aria-hidden="true" className="absolute -left-16 -top-16 size-56 rounded-full bg-white/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -right-10 size-64 rounded-full bg-sky-300/30 blur-3xl" />

      <div aria-hidden="true" className="absolute right-[-2%] top-[12%] w-[88%] -rotate-3">
        <div className="overflow-hidden rounded-t-xl border-[5px] border-b-[7px] border-neutral-800 bg-neutral-800 shadow-2xl">
          <div className="relative aspect-[16/10] bg-white">
            <Image
              src="/images/linkedin-profile.png"
              alt=""
              fill
              sizes="300px"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="mx-[-6%] h-3 rounded-b-xl bg-gradient-to-b from-neutral-200 to-neutral-400 shadow-lg" />
      </div>

      <span
        aria-hidden="true"
        className="absolute right-4 top-4 flex size-11 rotate-6 items-center justify-center rounded-xl bg-white shadow-lg"
      >
        <Image src="/logos/linkedin.svg" alt="" width={26} height={26} />
      </span>

      <div className="absolute bottom-0 left-[-6%] w-[86%]">
        <Image
          src="/images/headshot-cutout.png"
          alt="Portrait of Nabilla Sulistyaningrum in a black blazer"
          width={1069}
          height={1329}
          quality={95}
          sizes="(min-width: 1024px) 280px, 80vw"
          className="h-auto w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
          priority
        />
      </div>
    </div>
  )
}
