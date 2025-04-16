
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Anchor, Fuel, Navigation } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import LanguageSelector from './LanguageSelector';

interface CalculationResult {
  fuelNeeded: number;
  estimatedCost: number;
  travelTime: number;
}

const FuelCalculator = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    tankCapacity: '',
    fuelConsumption: '',
    startDestination: '',
    endDestination: '',
    speed: '',
    distance: '',
    fuelPrice: ''
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFuelConsumption = () => {
    const distance = Number(formData.distance);
    const consumption = Number(formData.fuelConsumption);
    const speed = Number(formData.speed);
    const fuelPrice = Number(formData.fuelPrice);

    if (distance && consumption && speed && fuelPrice) {
      const fuelNeeded = distance * consumption;
      const travelTime = distance / speed;
      const estimatedCost = fuelNeeded * fuelPrice;

      setResult({
        fuelNeeded,
        estimatedCost,
        travelTime
      });
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card className="p-6 bg-white shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#1E293B] flex items-center gap-2">
            <Anchor className="w-6 h-6 text-[#0EA5E9]" />
            {t.title}
          </h1>
          <LanguageSelector />
        </div>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tankCapacity">{t.tankCapacity}</Label>
              <Input
                id="tankCapacity"
                name="tankCapacity"
                type="number"
                placeholder={t.tankCapacityPlaceholder}
                value={formData.tankCapacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelConsumption">{t.fuelConsumption}</Label>
              <Input
                id="fuelConsumption"
                name="fuelConsumption"
                type="number"
                placeholder={t.fuelConsumptionPlaceholder}
                value={formData.fuelConsumption}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDestination">{t.startDestination}</Label>
              <Input
                id="startDestination"
                name="startDestination"
                placeholder={t.startDestinationPlaceholder}
                value={formData.startDestination}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDestination">{t.endDestination}</Label>
              <Input
                id="endDestination"
                name="endDestination"
                placeholder={t.endDestinationPlaceholder}
                value={formData.endDestination}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="distance">{t.distance}</Label>
              <Input
                id="distance"
                name="distance"
                type="number"
                placeholder={t.distancePlaceholder}
                value={formData.distance}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speed">{t.speed}</Label>
              <Input
                id="speed"
                name="speed"
                type="number"
                placeholder={t.speedPlaceholder}
                value={formData.speed}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelPrice">{t.fuelPrice}</Label>
              <Input
                id="fuelPrice"
                name="fuelPrice"
                type="number"
                placeholder={t.fuelPricePlaceholder}
                value={formData.fuelPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Button 
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7]"
            onClick={calculateFuelConsumption}
          >
            <Navigation className="w-4 h-4 mr-2" />
            {t.calculate}
          </Button>

          {result && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-[#F8FAFC]">
                <div className="flex flex-col items-center">
                  <Fuel className="w-8 h-8 text-[#0EA5E9] mb-2" />
                  <p className="text-sm text-[#64748B]">{t.fuelNeeded}</p>
                  <p className="text-xl font-bold text-[#1E293B]">
                    {result.fuelNeeded.toFixed(2)} L
                  </p>
                </div>
              </Card>
              <Card className="p-4 bg-[#F8FAFC]">
                <div className="flex flex-col items-center">
                  <Navigation className="w-8 h-8 text-[#0EA5E9] mb-2" />
                  <p className="text-sm text-[#64748B]">{t.travelTime}</p>
                  <p className="text-xl font-bold text-[#1E293B]">
                    {result.travelTime.toFixed(2)} h
                  </p>
                </div>
              </Card>
              <Card className="p-4 bg-[#F8FAFC]">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 text-[#0EA5E9] mb-2"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-[#64748B]">{t.estimatedCost}</p>
                  <p className="text-xl font-bold text-[#1E293B]">
                    {result.estimatedCost.toFixed(2)} €
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default FuelCalculator;
