const { countComments } = require('./commentCounter.js');

beforeAll(() => {
  document.body.innerHTML = `
  <div class="movie__comments">
    <h3>Comments (3)</h3>
    <ul class="comments__list"></ul>
  </div>`;
});

test('Counter function of comments', () => {
  const title = document.querySelector('.movie__comments h3').textContent;
  const commentList = document.querySelector('.comments__list');
  commentList.innerHTML = `
  <li>
    <div class="owner">
      <span>2022-02-01</span>
      <span class="item-name">Gaby:</span>
    </div>
    <div class="comment">
      <p class="item-comment">This is an amazing movie.</p>
    </div>
  </li>
  <li>
    <div class="owner">
      <span>2022-02-01</span>
      <span class="item-name">Gaby:</span>
    </div>
    <div class="comment">
      <p class="item-comment">This is an amazing movie.</p>
    </div>
  </li>
  <li>
  <div class="owner">
    <span>2022-02-01</span>
    <span class="item-name">Alex:</span>
  </div>
  <div class="comment">
    <p class="item-comment">I liked watching this movie.</p>
  </div>
  </li>`;

  const newTitle = countComments(document.querySelectorAll('.comments__list li'));
  expect(newTitle).toEqual(title);
});
