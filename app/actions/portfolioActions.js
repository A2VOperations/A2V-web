"use server";

import connectDB from "@/lib/db";
import Portfolio from "@/models/Portfolio";
import { revalidatePath } from "next/cache";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function checkAuth() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') {
    throw new Error("Unauthorized");
  }
}

export async function getPortfolios() {
  try {
    await connectDB();
    const portfolios = await Portfolio.find({}).sort({ createdAt: -1 });
    return { success: true, data: JSON.parse(JSON.stringify(portfolios)) };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function addPortfolio(formData) {
  try {
    await checkAuth();
    await connectDB();
    const techString = formData.get("tech");
    const techArray = techString ? techString.split(',').map(t => t.trim()) : [];
    
    const newPortfolio = new Portfolio({
      title: formData.get("title"),
      category: formData.get("category"),
      image: formData.get("image"),
      description: formData.get("description"),
      tech: techArray,
      link: formData.get("link") || "#",
      isLive: formData.get("isLive") === "on" || formData.get("isLive") === "true",
    });

    await newPortfolio.save();
    revalidatePath("/portfolio");
    revalidatePath("/admin/portfolio");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deletePortfolio(id) {
  try {
    await checkAuth();
    await connectDB();
    await Portfolio.findByIdAndDelete(id);
    revalidatePath("/portfolio");
    revalidatePath("/admin/portfolio");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updatePortfolio(id, formData) {
  try {
    await checkAuth();
    await connectDB();
    const techString = formData.get("tech");
    const techArray = techString ? techString.split(',').map(t => t.trim()) : [];

    const updatedData = {
      title: formData.get("title"),
      category: formData.get("category"),
      image: formData.get("image"),
      description: formData.get("description"),
      tech: techArray,
      link: formData.get("link") || "#",
      isLive: formData.get("isLive") === "on" || formData.get("isLive") === "true",
    };

    await Portfolio.findByIdAndUpdate(id, updatedData);
    revalidatePath("/portfolio");
    revalidatePath("/admin/portfolio");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
