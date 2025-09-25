import Link from "next/link";

export default function QuizPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <section>
      <h1>Quiz {params.id}</h1>
      <button className="border border-black">
        <Link href="/">Back</Link>
      </button>
    </section>
  );
}
