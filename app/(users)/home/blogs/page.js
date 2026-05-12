import React from "react";

function page() {
  const posts = [
    {
      id: 1,
      date: "05 June 2025",
      comments: 5,
      title: "The Future of Software Development Emerging and Technologies",
      description: "We undertake is a testament to our dedication to quality",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      date: "05 June 2025",
      comments: 5,
      title:
        "Mastering Agile: Best Practices for Efficient Software Development",
      description: "We undertake is a testament to our dedication to quality",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-6 md:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-medium tracking-widest uppercase mb-2">
            Latest News & Blog
          </p>
          <h2 className="text-4xl font-light text-gray-900">
            <span className="font-bold text-orange-500">Read Our Latest</span>{" "}
            News & Blog
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className=" group flex border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              {/* Text Content */}
              <div className="flex flex-col justify-between p-8 flex-1">
                {/* Meta */}
                <div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
                    <span>{post.date}</span>
                    <span className="text-gray-300">—</span>
                    <span>Comment({post.comments})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 text-xl font-semibold leading-snug mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <button className="flex items-center gap-2 text-orange-500 border border-orange-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-orange-50 transition-colors duration-200">
                    + Read More
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="w-48 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default page;
