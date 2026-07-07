import Link from "./Link";

export default function NotFound() {
    return (
        <>
        <section className="px-8 grid gap-8">
            <h1 className="font-bold text-purple-700 text-2xl mt-25">Ops! A página que você está procurando não foi encontrada.</h1>

            <Link href="/" aria-label="Voltar para o início">Início</Link>
        </section>
        </>
    )
}