import portfolio from "./data/portfolio.js";

const tagsContainer = document.querySelector(".js-filter-buttons");
let selectedTag = null;

tagsContainer.addEventListener("click", ontagsContainerClick);

function ontagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const activeBtn = document.querySelector(".portfolio__radio-button--active");

  if (activeBtn) {
    activeBtn.classList.remove("portfolio__radio-button--active");
  }

  const nextActiveBtn = evt.target;
  evt.target.classList.add("portfolio__radio-button--active");
  selectedTag = nextActiveBtn.dataset.value;

  const portfolioListMarkup = createListItemsMarkup(portfolio, selectedTag);
  populateList(portfolioListMarkup);
}

const refs = {
  portfolioList: document.querySelector(".js-portfolio__list"),
};

const portfolioListMarkup = createListItemsMarkup(portfolio, "all");
populateList(portfolioListMarkup);

// refs.input.addEventListener("input", _.debounce(onFilterChange, 300));

function createListItemsMarkup(items, tag) {
  return items
    .map((item) => {
      if (tag === "all") {
        return `
        <li class="portfolio__item">
        <div class="portfolio__thumb">
                <picture>
                  <source
                  srcset="
                  ./images/${item.images.webp} 1x,
                  ./images/${item.images.webp_2x} 2x
                    "
                    type="image/webp"
                  />
                  <img
                  class="portfolio__image"
                  srcset="
                  ./images/${item.images.jpg} 1x,
                  ./images/${item.images.jpg_2x} 2x
                  "
                  src="./images/${item.images.jpg}"
                  alt="${item.alt}"
                  width="370"
                  />
                  </picture>
                  <div class="portfolio__overlay">
                  <p class="portfolio__descr">
                  ${item.description}
                  </p>
                  </div>
              </div>
              <a href="" class="portfolio__link">
              <div class="portfolio__meta">
              <h2 class="portfolio__heading">${item.name}</h2>
              <p class="portfolio__category">${item.label}</p>
              </div>
              </a>
            </li>
            `;
      } else if (item.tag === tag) {
        return `
        <li class="portfolio__item">
        <div class="portfolio__thumb">
                <picture>
                  <source
                  srcset="
                  ./images/${item.images.webp} 1x,
                  ./images/${item.images.webp_2x} 2x
                    "
                    type="image/webp"
                  />
                  <img
                  class="portfolio__image"
                  srcset="
                  ./images/${item.images.jpg} 1x,
                  ./images/${item.images.jpg_2x} 2x
                  "
                  src="./images/${item.images.jpg}"
                  alt="${item.alt}"
                  width="370"
                  />
                  </picture>
                  <div class="portfolio__overlay">
                  <p class="portfolio__descr">
                  ${item.description}
                  </p>
                  </div>
              </div>
              <a href="" class="portfolio__link">
              <div class="portfolio__meta">
              <h2 class="portfolio__heading">${item.name}</h2>
              <p class="portfolio__category">${item.label}</p>
              </div>
              </a>
            </li>
            `;
      }
    })
    .join("");
}

function populateList(markup) {
  refs.portfolioList.innerHTML = markup;
}
