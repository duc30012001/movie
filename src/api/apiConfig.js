const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '594256a7507bf1dd734d9edef28014de',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;