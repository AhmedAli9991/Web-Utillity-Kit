function SwitchWithLabel({ label, isOn, setIsOn }) {
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className="flex flex-col items-start space-y-2">
        <label className="text-gray-700">{label}</label>
        <div
          onClick={toggleSwitch}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isOn ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>
      </div>
    );
  }
  
  export default SwitchWithLabel;
  