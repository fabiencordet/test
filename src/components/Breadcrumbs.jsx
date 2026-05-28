import React from 'react';

export default function Breadcrumbs({ paths }) {
  return (
    <nav className="flex mb-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-200">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <a href="/dashboard" className="hover:text-blue-600 font-medium">Tableau de bord</a>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="inline-flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {path.href ? (
              <a href={path.href} className="hover:text-blue-600 font-medium">{path.label}</a>
            ) : (
              <span className="text-gray-900 font-semibold">{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
