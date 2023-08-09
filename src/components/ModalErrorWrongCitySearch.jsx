import { handleCloseModal } from "./utils/handles.js";

const ModalErrorWrongCitySearch = ({notFoundCountry,
    setNotFoundCountry,
    language}) => {
  return (
    (
        <section className={`${notFoundCountry ? 'bottom-0 ' : 'bottom-full '} transition-all duration-500 absolute min-h-screen w-full backdrop-blur-sm z-20 flex justify-center items-center p-4`}>
          <p className="text-white-700 text-center relative bg-cyan-500 p-8 w-[600px] flex justify-center items-center rounded-2xl font-bold text-2xl dark:bg-slate-950"
          >
            {language === "en"
              ? "You have selected a city that does not exist, please write the city for which you want to know the weather!"
              : "Has seleccionado una ciudad que no existe, por favor escribe la ciudad de la que deseas conocer el estado del clima"}
  
            <span
              onClick={() => handleCloseModal(setNotFoundCountry)}
              className="absolute top-2 right-4 h-6 w-6 rounded-full bg-red-600 flex justify-center items-center font-bold text-lg cursor-pointer"
            >
              X
            </span>
          </p>
        </section>
      )
  )
}
export default ModalErrorWrongCitySearch