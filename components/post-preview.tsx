import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex-1 ml-4">
        <h3 className="text-xl">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="flex flex-row">
          <Avatar name={author.name} picture={author.picture} />
          <div className="font-bold text-xs my-auto mx-2">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview
