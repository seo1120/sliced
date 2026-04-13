import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/sliced-icon.svg" alt="Sliced" width={26} height={26} className="rounded-md" />
          <span className="text-[16px] font-semibold tracking-tight text-foreground">SLICED</span>
        </Link>

        <a
          href="https://tally.so/r/ob71KP"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-4 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-accent-hover sm:px-5 sm:text-[13px]"
        >
          Join as Creator
        </a>
      </nav>
    </header>
  );
}
