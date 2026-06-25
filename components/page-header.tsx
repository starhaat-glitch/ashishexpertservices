export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-16">
        <h1 className="text-3xl font-bold text-balance text-foreground sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
