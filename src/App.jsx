import Navbar from "./components/Navbar";
import Bargraph from "./components/Bargraph";
import Linegraph from "./components/Linegraph";
import AreaChart from "./components/AreaChart";
import Middle from "./components/Middle";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import AreaChartOne from "./components/AreaSingle";
import Report from "./components/Report";

function App() {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetchReportingData = async () => {
      try {
        const response = await fetch("http://localhost:3000/rawData");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchReportingData();
  }, []);
  return (
    <>
      <Navbar />
      <div className=" flex justify-evenly p-5 m-5">
        <div className="w-60 h-32 border-2 border-purple-600 rounded ml-2">
          {Data && (
            <Bargraph
              text={Data.reporting.text}
              cate={Data.reporting.categories}
              data={Data.reporting.data}
            />
          )}

        </div>
        <div className="w-60 h-32  ml-4 ">
          {Data && (
            <Linegraph
              text={Data.inTheft.text}
              cate={Data.inTheft.date}
              data={Data.inTheft.intheft}
            />
          )}

        </div>
        <div className="w-60 h-32 ml-4 ">
          {Data && (
            <Bargraph
              text={Data.motor.text}
              cate={Data.motor.customer}
              data={Data.motor.motors}
            />
          )}


        </div>
        <div className="w-60 h-32 ml-4">
          {Data && (
            <Bargraph
              text={Data.vehicle.text}
              cate={Data.vehicle.customer}
              data={Data.vehicle.vehicles}
            />
          )}
        </div>
        <div className="w-64 h-32 ml-4">
          {Data && (<AreaChart text={Data.devices.text}
            series1={Data.devices.new}
            series2={Data.devices.installed}
            series3={Data.devices.active}
            series4={Data.devices.total}
            cate={Data.devices.date}
          />)}
        </div>
      </div>
      <div className="flex justify-evenly mt-10 rounded-2xl">
          <Middle />
      </div>
      <div className="flex ml-12  mt-2 justify-evenly ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4649.0649557655715!2d75.88996339263771!3d22.753362610606104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1710742877391!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-xl w-200 h-200"
        ></iframe>
        <div className=" w-full ml-4 mr-20 rounded-md">
          <Report/>
        </div>
      </div>
      <div className="flex ml-12 justify-evenly mt-2 mr-6">
        <div className="h-32 w-64 pt-2">
          {Data &&(
            <AreaChartOne cate={Data.device_health.dates} text={Data.device_health.text} Data={Data.device_health.battery}/>
          )}
          </div>
        <div className="h-32 w-64 pt-2">
        {Data &&(
            <AreaChartOne cate={Data.vehicle_health.dates} text={Data.vehicle_health.text} Data={Data.vehicle_health.battery}/>
          )}
          </div>
        <div className="h-32 w-64 pt-2 ">
           {Data &&
           (
            <Bargraph text={Data.other.text} data={Data.other.battery} cate={Data.other.dates}/>
           )
           }
          </div>
        <div className="h-32 w-64 m-4  rounded-xl bg-cyan-950 ">
          {Data && (<Card details={Data.Details}/>)}
        </div>
      </div>
    </>
  );
}

export default App;
