import fs from 'fs'

export default {
  paths() {
    const postsDir = 'docs/blog/posts';
    const files = fs.readdirSync(postsDir);
    const postCount = files.length;
    const rangeEnd = Math.ceil(postCount / 12); // 向上取整，确保包含所有区间

    // 生成从1到rangeEnd的序列
    const pathsSequence = Array.from({ length: rangeEnd }, (_, index) => index + 1);

    // 映射序列中的每个数字为对应的params对象
    return pathsSequence.map((number) => {
      return { params: { page: number } };
    });
  }
}
