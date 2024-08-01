import details from '@/public/data/details.json';

export default function Details() {
  return (
    <div className="details mb-4 bg-very-dark-blue p-4">
      <h3 className="details_title text-xl font-bold text-soft-orange">New</h3>
      <ul className="details_list space-y-8 pt-4">
        {details.map((detail, index) => {
          return (
            <li
              key={index}
              className="list-item space-y-2 border-b border-dark-grayish-blue pb-4 last:border-b-0"
            >
              <h4 className="item_title cursor-pointer text-sm font-bold text-off-white hover:text-soft-orange">
                {detail.title}
              </h4>
              <p className="item_subtitle text-xs text-grayish-blue">
                {detail.subtitle}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
