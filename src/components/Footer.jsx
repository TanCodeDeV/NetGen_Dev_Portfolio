import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Copyright */}
        <div className="mb-2 md:mb-0">
          <p>© {new Date().getFullYear()} NextGenDev. All rights reserved.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-0.883 0.392-1.832 0.656-2.828 0.775 1.017-0.609 1.798-1.574 2.165-2.724-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-0.205-7.719-2.165-10.148-5.144-1.29 2.213-0.669 5.108 1.523 6.574-0.806-0.026-1.566-0.247-2.229-0.616-0.054 2.281 1.581 4.415 3.949 4.89-0.693 0.188-1.452 0.232-2.224 0.084 0.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 0.962-0.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-0.246-11.631-0.245-15.23 0-3.897 0.266-4.356 2.62-4.385 8.816 0.029 6.185 0.484 8.549 4.385 8.816 3.6 0.245 11.626 0.246 15.23 0 3.897-0.266 4.356-2.62 4.385-8.816-0.029-6.185-0.484-8.549-4.385-8.816zM9 12V4l8 4-8 4z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642l0.358-4h-4V6.333c0-0.955 0.192-1.333 1.115-1.333h2.885V0h-3.808C10.404 0 8.808 1.583 8.808 4.615V8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
