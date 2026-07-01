"use client";

import React from "react";
import { FiAlertCircle, FiX } from "react-icons/fi";

export default function ValidationModal({ isOpen, onClose, title, message, errors = [] }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20000 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-2xl transition-all animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
        >
          <FiX size={20} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 shadow-inner">
            <FiAlertCircle size={32} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            {title || "Validation Error"}
          </h3>
          <p className="mt-2 text-slate-500 font-medium">
            {message || "Please correct the following issues:"}
          </p>
        </div>

        {/* Errors List */}
        {errors.length > 0 && (
          <div className="mt-6 space-y-3">
            {errors.map((error, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100 group hover:border-red-100 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-red-700 transition-colors">
                  {error}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-linear-to-r from-orange-500 to-red-600 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            I&apos;ll Fix It
          </button>
        </div>
      </div>
    </div>
  );
}
