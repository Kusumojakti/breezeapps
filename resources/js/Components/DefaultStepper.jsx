import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);


  const stepDescriptions = [
    "Pastikan sudah menginstall Laravel pada project kalian",
    "Tuliskan “composer require laravel/breeze --dev” pada terminal ",
    "Setup konfigurasi database pada .env",
    "Tuliskan “php artisan breeze:install” dan setelah selesai tuliskan “php artisan migrate” untuk melakukan migrasi ke database ",
    "Langkah selanjutnya tuliskan “npm install” tunggu hingga proses selesai dan jalankan aplikasi menggunakan “npm run dev” "
  ];

  const stepNumber = [
    "Langkah 1:",
    "Langkah 2:",
    "Langkah 3:",
    "Langkah 4:",
    "Langkah 5:",
  ];

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
      setIsFirstStep(false);
      if (activeStep >= stepDescriptions.length - 2) {
        setIsLastStep(true);
      }
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
      setIsLastStep(false);
      if (activeStep <= 1) {
        setIsFirstStep(true);
      }
    }
  };

  return (
    <div className="w-full py-4 px-8">
        
      <div className="mb-16 text-xl rounded-xl bg-slate-900 text-white py-14 justify-center items-center flex flex-col p-4 border shadow-lg">
        <div className="text-3xl mb-4">
          {stepNumber[activeStep]}
        </div>
        {stepDescriptions[activeStep]}
      </div>

      <Stepper 
        activeStep={activeStep}
        isLastStep={isLastStep}
        isFirstStep={isFirstStep}
        className="flex justify-between space-x-4"
      >
        <Step onClick={() => setActiveStep(0)}><span className="flex items-center justify-center">1</span></Step>
        <Step onClick={() => setActiveStep(1)}><span className="flex items-center justify-center">2</span></Step>
        <Step onClick={() => setActiveStep(2)}><span className="flex items-center justify-center">3</span></Step>
        <Step onClick={() => setActiveStep(3)}><span className="flex items-center justify-center">4</span></Step>
        <Step onClick={() => setActiveStep(4)}><span className="flex items-center justify-center">5</span></Step>
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default DefaultStepper;
