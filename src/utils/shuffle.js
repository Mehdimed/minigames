// Combine and shuffle two arrays
const shuffle = () => {
    const assets = [
      { image: '/assets/hophelie/500x500_tete1.png' },
      { image: '/assets/hophelie/500x500_tete2.png' },
      { image: '/assets/hophelie/500x500_tete3.png'},
      { image: '/assets/hophelie/500x500_tete4.png' },
      { image: '/assets/hophelie/500x500_tete5.png' },
      { image: '/assets/hophelie/500x500_tete6.png' },
      { image: '/assets/hophelie/500x500_tete7.png'},
      { image: '/assets/hophelie/500x500_tete8.png' },
    ];
    return [...assets, ...assets]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
  };
  
  export default shuffle;