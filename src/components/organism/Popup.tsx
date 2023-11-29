import { usePopup } from '../../Hooks/usePopup'

export default function RegularPopup() {
  const { isPopupOpen, closePopup, popupContent } = usePopup()

  return isPopupOpen ? (
    <>
      <div
        className="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-20 justify-center items-center w-screen md:inset-0 h-[calc(100%)] max-h-full bg-black/50"
        onClick={closePopup}
      ></div>
      <div className="fixed p-4 w-[46rem] max-w-2xl max-h-full top-[calc(100%_-_42rem)] left-[calc(50vw_-_21rem)] z-30">
        <div className="relative rounded-lg shadow bg-navy-90 p-6">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-white-5 dark:text-white">
              {popupContent?.title}
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closePopup}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Fechar Cadastro</span>
            </button>
          </div>
          {popupContent?.content}
        </div>
      </div>
    </>
  ) : null
}
