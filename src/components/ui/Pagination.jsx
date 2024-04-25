const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  return (
    <div className="flex items-center justify-center gap-2 my-12">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-4 py-2 rounded font-medium ${
            currentPage === number
              ? "bg-primary-black text-primary-white"
              : "bg-white hover:bg-primary-black hover:text-primary-white"
          } duration-300`}
          onClick={() => setCurrentPage(number)}
        >
          {number + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
