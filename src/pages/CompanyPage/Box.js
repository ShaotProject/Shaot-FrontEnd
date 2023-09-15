import React from "react";

export const Box = ({ isActive, onBoxClick, day }) => {
  return (
    <div
      className={`relative bg-white h-[430px] border border-[#1F8A83] rounded-md ${
        isActive ? "w-[510px]" : "w-[110px]"
      }`}
      onClick={onBoxClick}
    >
      <div
        className={`bg-[#1F8A83] rounded-t-md h-14 ${
          isActive ? "w-[510px]" : "w-[110px]"
        }`}
      >
        <div className=" text-white font-bold leading-5 whitespace-nowrap absolute top-[15px] left-[15px]">
          {day[0].dayName}
        </div>
      </div>

      <div className="flex flex-col w-full">
        {day.map((shift, index) => (
          <div className="flex flex-row mt-2  ">
            <div className="bg-[#99C2BD] h-[115px] w-[42px] flex items-center justify-center rounded-r-md">
              <p className=" text-white leading-6 whitespace-nowrap transform rotate-90">
                <span className="font-light">{isActive && shift.shiftStart}</span>
              </p>
            </div>
            <div className="flex flex-col w-full pl-4">
              {day[index].workerNames.map((name) => (
                <div className="flex flex-row mt-2 ">
                  {isActive ? name: name[0]+name[1]}
                  
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
