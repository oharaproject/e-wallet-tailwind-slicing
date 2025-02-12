import React from "react";

const RocketLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {[...Array(20)].map((_, index) => (
        <span
          key={index}
          className="absolute w-3 h-3 bg-brands-light-green rounded-full"
          style={{
            transform: `rotate(${index * 18}deg) translate(50px)`,
            animation: "fadeIn 2s linear infinite",
            animationDelay: `${index * -0.1}s`,
          }}
        ></span>
      ))}
      <p className="text-sm text-slate-900 font-brand-medium mt-48">
        Silahkan menunggu beberapa saat...
      </p>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }
        @keyframes rocket-spin {
          0% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(370deg);
          }
        }
        .animate-rocket-spin {
          animation: rocket-spin 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RocketLoading;
