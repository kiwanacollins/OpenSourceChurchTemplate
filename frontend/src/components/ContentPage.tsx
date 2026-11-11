import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";

export interface ContentSection {
  heading: string;
  body: string;
  items?: string[];
}

interface ContentPageProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  sections: ContentSection[];
  action?: {
    label: string;
    href: string;
  };
}

export default function ContentPage({
  title,
  subtitle,
  backgroundImage,
  sections,
  action,
}: ContentPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />
      <main className="container mx-auto max-w-5xl px-4 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-lg bg-white p-8 md:p-10 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-darkMossGreen">
                {section.heading}
              </h2>
              <p className="leading-7 text-gray-600">{section.body}</p>
              {section.items && (
                <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-600">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        {action && (
          <div className="mt-12 text-center">
            <Link
              href={action.href}
              className="inline-block rounded-lg bg-darkMossGreen px-6 py-3 font-semibold text-white transition-colors hover:bg-earthYellow"
            >
              {action.label}
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
