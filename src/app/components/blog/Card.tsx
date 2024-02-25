import Link from "next/link";
import { PostProps } from "@/types";

type Props = {
  post: PostProps;
};

export default function ListItem({ post }: Props) {
  const { id, title, body } = post;

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{body}</p>
    </li>
  );
}
