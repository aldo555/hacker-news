async function getStoriesByIds(storyIds) {
  const promises = storyIds
    .slice(0, 15)
    .map(id =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
        response => response.json()
      )
    );

  const stories = await Promise.all(promises);
  return stories
}

export async function getTopStories() {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');

  if (response.ok === false) {
    throw new Error("Response Error:" + response.text);
  }

  const storyIds = await response.json();
  return getStoriesByIds(storyIds)
}

export async function getNewStories() {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');

  if (response.ok === false) {
    throw new Error("Response Error:" + response.text);
  }

  const storyIds = await response.json();
  return getStoriesByIds(storyIds)
}
