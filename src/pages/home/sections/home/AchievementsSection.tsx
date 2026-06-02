import React from "react";

interface AchievementsSectionProps {
  lang: "hi" | "en";
}

const AchievementsSection = ({ lang }: AchievementsSectionProps) => {
  const isHi = lang === "hi";

  const metrics = [
    {
      val: "45+",
      label: isHi ? "वर्षों का अनुभव" : "Years Experience",
      color: "text-[#0B5A44]",
      dotColor: "bg-[#0B5A44]",
    },
    {
      val: "5+",
      label: isHi ? "विधायक कार्यकाल" : "MLA Terms",
      color: "text-[#F97316]",
      dotColor: "bg-[#F97316]",
    },
    {
      val: "100+",
      label: isHi ? "विकास परियोजनाएँ" : "Projects Completed",
      color: "text-[#0B5A44]",
      dotColor: "bg-[#0B5A44]",
    },
    {
      val: "1200+",
      label: isHi ? "ग्राम एवं क्षेत्र" : "Villages Connected",
      color: "text-[#F97316]",
      dotColor: "bg-[#F97316]",
    },
  ];

  return (
    <div className="w-full bg-[#fafaf9] border-b border-slate-200/50 relative overflow-hidden ">
      
      {/* Premium Top Dual Accent Rail (Continuous connection to Hero) */}
      <div className="absolute top-0 left-0 w-full h-[3px] flex">
        <div className="w-1/2 h-full bg-[#0B5A44]" />
        <div className="w-1/2 h-full bg-[#F97316]" />
      </div>

      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-16 py-6 lg:py-8">
        {/* Responsive Layout Grid: 2x2 on Mobile, 4x1 Streamlined on Desktop */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-y-6 gap-x-4 divide-slate-200/70 max-lg:divide-y max-lg:[&>*:nth-child(odd)]:pr-4 max-lg:[&>*:nth-child(even)]:pl-4 lg:divide-x">
          
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:w-full lg:justify-center lg:px-6 first:pt-0 max-lg:[&:nth-child(2)]:pt-0 ${
                index >= 2 ? "max-lg:pt-4" : ""
              }`}
            >
              {/* Numeric Metric Value */}
              <div className={`font-asar text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight shrink-0 ${metric.color}`}>
                {metric.val}
              </div>

              {/* Structural Text Label Group */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className={`w-1 h-1 rounded-full ${metric.dotColor} opacity-70`} />
                  <span className="text-[10px] sm:text-xs font-bold font-poppins tracking-wider text-slate-400 uppercase">
                    {isHi ? "कीर्तिमान" : "Milestone"}
                  </span>
                </div>
                <p className="font-poppins text-xs sm:text-sm font-semibold text-slate-800 tracking-wide whitespace-nowrap mt-0.5">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;