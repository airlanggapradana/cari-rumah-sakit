import Image from "next/image";
import FormInput from "./_components/FormInput";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="container mx-auto px-5">
        <div className="space-y-7">
          <h1 className="text-3xl font-bold text-center max-w-2xl mx-auto leading-relaxed tracking-tight">
            Cari Info Ketersediaan Kamar Rumah Sakit di Seluruh Indonesia.
          </h1>

          <FormInput />
        </div>
      </section>
    </main>
  );
}
