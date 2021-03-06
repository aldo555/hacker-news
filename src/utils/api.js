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

export async function getUser(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)

  if (response.ok === false) {
    throw new Error("Response Error:" + response.text);
  }

  const user = await response.json()
  return user
}

export async function getStoriesByUser(id) {
  const user = await getUser(id)

  const storyIds = user.submitted
  return getStoriesByIds(storyIds)
}

export async function getStoryById(id) {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

  if (response.ok === false) {
    throw new Error("Response Error:" + response.text);
  }

  const story = await response.json();

  if (story.kids && story.kids.length > 0) {
    story.comments = await getStoriesByIds(story.kids)
  }

  return story
}
