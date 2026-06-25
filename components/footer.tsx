import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t pt-8 text-center text-gray-600">
        <div className="flex space-x-6 justify-center mb-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/artisans">Artisans</Link>          
        </div>
      <p>
        © 2026 Handcrafted Haven — Supporting artisans worldwide.
      </p>
    </footer>
  );
}

