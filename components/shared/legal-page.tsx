import { PageHeader } from '@/components/shared/page-header'

type LegalPageProps = {
  title: string
  updated: string
  sections: { heading: string; body: string }[]
}

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={`Last updated ${updated}`} />
      <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-foreground">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  )
}
