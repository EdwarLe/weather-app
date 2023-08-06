const ModalErrorEmptyCitySearch = ({ searchEmpty, setSearchEmpty }) => {
  const handleCloseModal = () => {
    setSearchEmpty(false);
  };
  return (
    searchEmpty && (
      <section className="absolute min-h-screen w-full backdrop-blur-sm z-20 flex justify-center items-center p-4 transition-all">
        <p className="text-white-700 col-span-3 text-center relative bg-slate-950 h-40 p-4 flex justify-center items-center rounded-2xl font-bold text-2xl">
          !it is necessary to write a city!
          <span
            onClick={handleCloseModal}
            className="absolute top-2 right-4 h-6 w-6 rounded-full bg-red-600 flex justify-center items-center font-bold text-lg cursor-pointer"
          >
            X
          </span>
        </p>
      </section>
    )
  );
};
export default ModalErrorEmptyCitySearch;
