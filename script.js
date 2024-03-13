import { collection } from "./collection.js";

const header = document.createElement("header");

/**header div1 */
const h_div1 = document.createElement("div");
const h_div1_i = document.createElement("i");
h_div1_i.setAttribute("class", "fa-solid fa-film i");
h_div1.appendChild(h_div1_i);

/**header div2 */
const h_div2 = document.createElement("div");
h_div2.setAttribute("class", "header-div");

const h_div2_cercle = document.createElement("div");
h_div2_cercle.setAttribute("class", "cercle");

const h_div2_text = document.createElement("div");
const h_div2_text_h1 = document.createElement("h1");
h_div2_text_h1.textContent = "Zacharie's Collection";
const h_div2_text_i = document.createElement("i");
h_div2_text_i.textContent = "Web Developer";
h_div2_text.appendChild(h_div2_text_h1);
h_div2_text.appendChild(h_div2_text_i);

h_div2.appendChild(h_div2_cercle);
h_div2.appendChild(h_div2_text);

/****HEADER  APPEND*/
header.appendChild(h_div1);
header.appendChild(h_div2);

/****BODY  APPEND*/

/*********
 *
 * ******
 * MAIN
 * **
 * **
 *  */

const main = document.createElement("main");
const article = document.createElement("article");

collection.forEach((movie, index) => {
  const a_div = document.createElement("div");
  a_div.setAttribute("class", `article-${index + 1}`);

  const a_div_img = document.createElement("div");
  a_div_img.setAttribute("class", "img");

  const a_div_details = document.createElement("div");
  a_div_details.setAttribute("class", "details");

  const a_div_details_tag = document.createElement("div");
  a_div_details_tag.setAttribute("class", "details-tag");

  const tag_ul = document.createElement("ul");
  const ag_ul_li1 = document.createElement("li");
  ag_ul_li1.textContent = movie.name;
  const tag_ul_li2 = document.createElement("li");
  const tag_ul_li2_i = document.createElement("i");
  tag_ul_li2_i.textContent = movie.genre;
  tag_ul_li2.appendChild(tag_ul_li2_i);
  tag_ul.appendChild(ag_ul_li1);
  tag_ul.appendChild(tag_ul_li2);

  const tag_movie = document.createElement("div");
  tag_movie.setAttribute("class", "movie-director");
  const tag_movie_h5 = document.createElement("h5");
  tag_movie_h5.textContent = "Produced by";
  const tag_movie_i = document.createElement("i");
  tag_movie_i.textContent = movie.Produced;
  tag_movie.appendChild(tag_movie_h5);
  tag_movie.appendChild(tag_movie_i);

  const cast = document.createElement("div");
  cast.setAttribute("class", "movie-cast");
  const cast_h5 = document.createElement("h5");
  cast_h5.textContent = "Cast :";
  const castList = document.createElement("i");
  movie.cast.forEach((actor) => {
    castList.innerHTML += actor + `<br>`;
  });
  cast.appendChild(cast_h5);
  cast.appendChild(castList);

  const button = document.createElement("button");
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.textContent = "Watch";
  button.appendChild(a);

  const span = document.createElement("span");
  span.setAttribute("class", "type");
  span.textContent = "Movie";

  a_div_details_tag.append(tag_ul, tag_movie, cast, button, span);

  a_div_details.appendChild(a_div_details_tag);

  a_div.appendChild(a_div_img);
  a_div.appendChild(a_div_details);

  article.appendChild(a_div);
  main.appendChild(article);
});

const footer = document.createElement("footer");
const footer_p = document.createElement("p");
footer_p.textContent = "©2024 Zacharie All Rights Reserved";
footer.appendChild(footer_p);

document.body.append(header, main, footer);
