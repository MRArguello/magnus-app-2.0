import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen w-screen gap-3">
      <Link href="/home" className="bg-blue-500 text-white p-4 rounded">
        Home
      </Link>
      <Link href="/playground" className="bg-blue-500 text-white p-4 rounded">
        Playground
      </Link>
      <Link href="/contact" className="bg-blue-500 text-white p-4 rounded">
        Contact
      </Link>
      <Link href="/blog" className="bg-blue-500 text-white p-4 rounded">
        Blog
      </Link>
      <Link href="/products" className="bg-blue-500 text-white p-4 rounded">
        Products
      </Link>
      <Link href="/gym" className="bg-blue-500 text-white p-4 rounded">
        Gym
      </Link>
      <Link href="/gymPlanner" className="bg-blue-500 text-white p-4 rounded">
        Gym Planner
      </Link>
      <Link href="/instructors" className="bg-blue-500 text-white p-4 rounded">
        Instructors
      </Link>
      <Link href="/activity" className="bg-blue-500 text-white p-4 rounded">
        Activity
      </Link>
      <Link href="/documentation" className="bg-blue-500 text-white p-4 rounded">
        Documentation
      </Link>
      <Link href="/user" className="bg-blue-500 text-white p-4 rounded">
        User
      </Link>
    </div>
  );
}
