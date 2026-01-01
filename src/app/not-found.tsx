import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Container>
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="mb-4 font-display text-6xl font-bold text-foreground md:text-8xl">
              404
            </h1>
            <p className="mb-8 text-xl text-foreground/70">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home size={20} />
                Go Home
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

