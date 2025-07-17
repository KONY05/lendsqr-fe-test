import Link from "next/link";

function EmptyPage() {
  return (
    <section className="mx-2 flex h-[80dvh] flex-col items-center justify-center">
      <h1 className="text-center text-xl font-semibold text-rose-950">
        Looks like we&apos;ve run out of the products here, try another category
        <Link href="/" className="cursor-pointer underline underline-offset-1">
          here
        </Link>
      </h1>
    </section>
  );
}

export default EmptyPage;
