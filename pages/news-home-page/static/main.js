const aside = document.querySelector('.header_aside');
const detailList = document.querySelector('#details_list');
const articleList = document.querySelector('#articles_list');
const detailItemTemplate = document.querySelector('#detail-item');
const articleItemTemplate = document.querySelector('#article-item');

const openAside = () => {
  aside.classList.add('open');
};

const closeAside = () => {
  aside.classList.remove('open');
};

function init() {
  details.forEach(detail => {
    const detailItem = detailItemTemplate.content.cloneNode(true);

    detailItem.querySelector('.item_title').textContent = detail.title;
    detailItem.querySelector('.item_subtitle').textContent = detail.subtitle;

    detailList.appendChild(detailItem);
  });

  articles.forEach(article => {
    const articleItem = articleItemTemplate.content.cloneNode(true);

    articleItem.querySelector('.item_image').src = article.imagePath;
    articleItem.querySelector('.item_image').alt = article.title;
    articleItem.querySelector('.feature_serial').textContent = article.serial;
    articleItem.querySelector('.feature_title').textContent = article.title;
    articleItem.querySelector('.feature_subtitle').textContent =
      article.subtitle;

    articleList.appendChild(articleItem);
  });
}

init();
