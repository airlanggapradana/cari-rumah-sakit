import ThemeToggle from "@/components/ThemeToggle";
import FormInput from "./_components/FormInput";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6 sm:p-24 dark:bg-gray-900 dark:text-gray-100">
      <section className="container mx-auto px-5">
        <div className="space-y-7">
          <ThemeToggle />
          <h1 className="text-xl sm:text-3xl font-bold text-center max-w-2xl mx-auto leading-relaxed tracking-tight">
            Cari Info Ketersediaan Kamar Rumah Sakit di Seluruh Indonesia.
          </h1>

          <FormInput />
          <ScrollToTopBtn />
        </div>
      </section>
    </main>
  );
}
