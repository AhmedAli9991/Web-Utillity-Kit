// pages/about.js

export default function About() {
  return (
      <div className="min-h-screen flex flex-col mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
              Welcome to our platform! We provide a range of tools designed to make your
              daily development tasks easier, from formatting JSON with our JSON formatter tool,
              finding differences between two JSONs with our diff finder tool, testing your APIs on live servers
              as well as local servers with our API Tester tool, and converting images to base64 with our conversion tool.
              We intend to provide a single place for all your daily utility needs as a developer.
          </p>
          <p className="text-lg text-gray-700 mt-4">
              Our mission is to create easy-to-use, reliable tools for developers and
              non-developers alike. Whether you're a seasoned pro or just starting out, 
              we're here to help you with the right tools for the job.
          </p>
          <p className="text-lg text-gray-700 mt-4">
              Feel free to explore our platform and get in touch if you have any questions 
              or feedback. We're constantly working to improve our services, and your input 
              is invaluable to us.
          </p>
          {/* <div className="flex-grow" /> This spacer pushes content to the top */}
      </div>
  );
}
