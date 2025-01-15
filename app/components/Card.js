'use client';

export default function Card({ image, title, description, buttonText }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-100 w-100 object-cover center"
      />
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-2 text-gray-800">{title}</h5>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
      href={link} // link here will be the URL you want to redirect to
      target="_blank" // This ensures the link opens in a new tab
      rel="noopener noreferrer" // Security feature for opening external links
    >
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        {buttonText}
      </button>
    </a>
      </div>
    </div>
  );
}
