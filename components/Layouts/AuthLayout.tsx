const AuthLayout: React.FC = ({ children }) => {
  return (
    <section className="p-8 md:px-18 lg:px-20 xl:px-24 z-20 bg-blue-900">
      <div className="flex flex-col md:flex-row mb-8">
        <div className="flex-1 min-w-[20rem] max-w-[28rem] z-20 mx-auto">
          <div className="relative bg-white rounded-lg text-[#080b2d] py-[2rem] px-6 md:px-12 shadow-[0_5px_5px_-2px_rgba(0,8,36,0.2)]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
