export default function Blog() {
  const posts = [
    { title: "First Blog Post", description: "Introduction to my blog!", date: "October 20, 2024" },
    { title: "Learning Tailwind CSS", description: "How Tailwind can speed up your styling process.", date: "October 21, 2024" },
    { title: "Next.js Basics", description: "A quick introduction to Next.js.", date: "October 22, 2024" },
    { title: "Mastering JavaScript", description: "Advanced JavaScript techniques.", date: "October 23, 2024" },
    { title: "React Hooks", description: "Understanding React Hooks and how to use them.", date: "October 24, 2024" },
    { title: "CSS Grid vs Flexbox", description: "When to use Grid or Flexbox in your layouts.", date: "October 25, 2024" },
    { title: "State Management in React", description: "Introduction to Redux and Context API.", date: "October 26, 2024" },
    { title: "Deploying with Vercel", description: "How to deploy Next.js applications using Vercel.", date: "October 27, 2024" },
    { title: "SEO in Next.js", description: "Best practices for optimizing Next.js applications for SEO.", date: "October 28, 2024" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between text-gray-900">
      <header className="py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">My Personal Blog</h1>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out opacity-0 animate-fade-in hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 1 }} // Asegúrate de que la opacidad inicial sea 1
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-white py-4">
        <p className="text-center">&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
