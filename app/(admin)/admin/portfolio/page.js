"use client";

import { useState, useEffect } from "react";
import { getPortfolios, addPortfolio, deletePortfolio, updatePortfolio } from "@/app/actions/portfolioActions";
import { Trash2, Edit2, Plus, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  async function fetchProjects() {
    setLoading(true);
    const res = await getPortfolios();
    if (res.success) {
      setProjects(res.data);
    } else {
      toast.error(res.error || "Failed to fetch projects");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    let res;
    if (editingProject) {
      res = await updatePortfolio(editingProject._id, formData);
    } else {
      res = await addPortfolio(formData);
    }

    if (res.success) {
      toast.success(editingProject ? "Project updated!" : "Project added!");
      setIsModalOpen(false);
      setEditingProject(null);
      fetchProjects();
    } else {
      toast.error(res.error || "Something went wrong");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this project?")) return;
    const res = await deletePortfolio(id);
    if (res.success) {
      toast.success("Project deleted!");
      fetchProjects();
    } else {
      toast.error(res.error || "Failed to delete project");
    }
  }

  function openEditModal(project) {
    setEditingProject(project);
    setIsModalOpen(true);
  }

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mb-8 bg-[#111] border border-white/10 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-white">Portfolio Management</h1>
        <button
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-4">
          <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="font-medium uppercase tracking-widest text-sm">Loading Projects...</p>
        </div>
      ) : (
        <div className="bg-[#111] border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-gray-400 uppercase text-xs tracking-widest border-b border-white/10">
                <th className="p-5 font-semibold">Project</th>
                <th className="p-5 font-semibold">Category</th>
                <th className="p-5 font-semibold">Status</th>
                <th className="p-5 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.map((project) => (
                <tr key={project._id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-5 flex items-center gap-4">
                    <img src={project.image} alt={project.title} className="w-16 h-12 object-cover rounded-lg border border-white/10" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white truncate">{project.title}</h3>
                      <p className="text-xs text-gray-500 truncate max-w-xs">{project.description}</p>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="text-sm font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                      {project.category}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.isLive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                      {project.isLive ? 'Live' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-5 text-right space-x-2">
                    <button onClick={() => openEditModal(project)} className="p-2.5 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-xl transition-all border border-transparent hover:border-blue-400/20">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(project._id)} className="p-2.5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all border border-transparent hover:border-red-400/20">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-12 text-center text-gray-500 font-medium italic">No projects found. Create one!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">{editingProject ? "Edit Project" : "Add Project"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Title</label>
                  <input type="text" name="title" required defaultValue={editingProject?.title} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Category</label>
                  <select name="category" required defaultValue={editingProject?.category || "Web Development"} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none">
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Image URL</label>
                <input type="text" name="image" required defaultValue={editingProject?.image} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="/images/portfolio-1.png" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                <textarea name="description" required defaultValue={editingProject?.description} rows="3" className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Technologies (comma-separated)</label>
                  <input type="text" name="tech" defaultValue={editingProject?.tech?.join(", ")} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Next.js, Tailwind, MongoDB" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Live Link URL</label>
                  <input type="text" name="link" defaultValue={editingProject?.link} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="https://example.com" />
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <input type="checkbox" id="isLive" name="isLive" defaultChecked={editingProject?.isLive} className="w-5 h-5 accent-blue-500 rounded cursor-pointer" />
                <label htmlFor="isLive" className="text-sm font-medium text-gray-300 cursor-pointer">Project is live and visible to users</label>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.99]">
                {editingProject ? "Update Project" : "Save Project"}
              </button>
            </form>
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
