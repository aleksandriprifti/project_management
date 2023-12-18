import React from "react";

const ProjectSidebar = () => {
  return (
    <aside className="w-1/5 px-8 py-16 rounded bg-stone-900 text-stone-50 md:w-72-r-xl rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
