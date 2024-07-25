import { computed, ref } from 'vue';
import { useRoute } from 'vitepress';
import { type Post} from './transform'

export function usePosts(input: Post[]) {
  const posts = computed(() => input)
  const route = useRoute();

  const path = route.path;

  const pageTotal = computed(() => {
    return Math.ceil(posts.value.length / 10);
  });

  const pageCurrent = computed({
    get() {
      const current = route.data.params?.page;
      return Number(current || 1);
    },
    set(newPage) {
      updateURLAndState(newPage);
    }
  });

  function updateURLAndState(newPage: number) {
    const newUrl = `${path}?page=${newPage}`;
    history.pushState({ page: newPage }, '', newUrl);
  }

  const postsCurrent = computed(() => {
    return posts.value.slice((pageCurrent.value - 1) * 10, pageCurrent.value * 10);
  })

  function findCurrentIndex() {
    const result = posts.value.findIndex((p) => decodeURI(route.path).includes(p?.url));
    if (result === -1) console.error(`blog post missing: ${route.path}`);
    return result;
  }

  const post = computed(() => posts.value[findCurrentIndex()]);
  const nextPost = computed(() => posts.value[findCurrentIndex() - 1]);
  const prevPost = computed(() => posts.value[findCurrentIndex() + 1]);

  return { postsCurrent, pageCurrent, pageTotal };
}
