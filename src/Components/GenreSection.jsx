// Example React component for the Genre Section

const GenreSection = () => {
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Thriller",
    "Animation",
    "Horror",
    "Romance",
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Browse by Genre</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {genres.map((genre , index) => (
          <div key={index}  className="btn btn-outline btn-primary">
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;