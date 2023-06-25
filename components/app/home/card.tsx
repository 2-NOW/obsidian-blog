import Link from "next/link";

interface ArticleProps {
  title: string;
  summary: string;
  date: string;
}

export const Card = ({ title, summary, date }: ArticleProps) => {
  return (
    <Link href={`/post/${title}`}>
      <article className="rounded bg-white p-4 transition duration-100 hover:shadow-md">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500">{summary}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </article>
    </Link>
  );
};
