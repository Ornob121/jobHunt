import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-12" id="error-page">
      <h1 className="text-6xl font-extrabold pb-4">Oops!</h1>
      <p className="text-3xl font-medium pb-5">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-700 text-xl">
        <i>Not Found</i>
      </p>
      <button
        className="text-xl font-bold text-white px-5 py-3 mt-6 rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF]"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}
