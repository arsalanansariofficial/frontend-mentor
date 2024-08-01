import Image from 'next/image';

import articles from '@/public/data/articles.json';

export default function Articles() {
  return (
    <section className="articles">
      <ul className="artciles_list space-y-8 md:flex md:space-y-0">
        {articles.map((article, index) => {
          return (
            <li key={index} className="list_item relative flex gap-4">
              <Image
                fill
                alt={article.title}
                fetchPriority="auto"
                src={article.imagePath}
                sizes="(max-width: 640px) 100px, 100px"
                className="item_image !static block !h-auto max-w-16 basis-full"
              />
              <div className="item_feature space-y-2">
                <h3 className="feature_serial text-xl font-bold text-soft-red">
                  {article.serial}
                </h3>
                <h4 className="feature_title text-xs font-bold">
                  {article.title}
                </h4>
                <p className="feature_subtitle text-pretty text-[0.55rem] text-dark-grayish-blue">
                  {article.subtitle}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
