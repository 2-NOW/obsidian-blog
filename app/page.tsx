import { Bio } from "components/app/home/bio";
import { Card } from "components/app/home/card";

const mockPosts = [
  {
    title: "Article 1",
    summary: "Summary 1",
    date: "2021-01-01",
  },
  {
    title: "Article 2",
    summary: "Summary 2",
    date: "2021-01-02",
  },
  {
    title: "Article 3",
    summary: "Summary 3",
    date: "2021-01-03",
  },
];

export default async function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="py-4">
        <Bio />
      </div>
      <section className="flex flex-col gap-4">
        {mockPosts.map((post) => (
          <Card key={post.title} {...post} />
        ))}
      </section>
    </main>
  );
}
