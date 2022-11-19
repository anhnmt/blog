import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { CourseSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function CourseSimple({ frontMatter, authorDetails, next, prev, children }) {
  const { index, title, slug } = frontMatter

  return (
    <SectionContainer>
      <CourseSEO
        {...frontMatter}
        title={`${index === 0 ? `Khoá học ${title}` : `${title}`}`}
        url={`${siteMetadata.siteUrl}/courses/${slug}`}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose prose-neutral max-w-none pt-10 pb-8 dark:prose-dark">
                {children}
              </div>
            </div>
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {!prev && (
                  <div className="pt-4 xl:pt-8">
                    <button
                      rel="previous"
                      className="cursor-auto disabled:opacity-50"
                      disabled={!prev}
                    >
                      👈 Bài trước
                    </button>
                  </div>
                )}
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    👈{' '}
                    <Link
                      href={`/courses/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {prev.title}
                    </Link>
                  </div>
                )}
                {!next && (
                  <div className="pt-4 xl:pt-8">
                    <button
                      rel="previous"
                      className="cursor-auto disabled:opacity-50"
                      disabled={!next}
                    >
                      Bài sau 👉
                    </button>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/courses/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title}
                    </Link>{' '}
                    👉
                  </div>
                )}
              </div>
            </footer>
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
