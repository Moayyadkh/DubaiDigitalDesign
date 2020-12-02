export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      { title: 'Under Construction', data: series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Under Construction', data: series?.filter((item) => item.genre === 'comedies') },
      { title: 'Under Construction', data: series?.filter((item) => item.genre === 'children') },
      { title: 'Under Construction', data: series?.filter((item) => item.genre === 'crime') },
      { title: 'Under Construction', data: series?.filter((item) => item.genre === 'feel-good') },
    ],
    films: [
      { title: 'Under Construction', data: films?.filter((item) => item.genre === 'drama') },
      { title: 'Under Constructionr', data: films?.filter((item) => item.genre === 'thriller') },
      { title: 'Under Construction', data: films?.filter((item) => item.genre === 'children') },
      { title: 'SUnder Construction', data: films?.filter((item) => item.genre === 'suspense') },
      { title: 'Under Construction', data: films?.filter((item) => item.genre === 'romance') },
    ],
  };
}
