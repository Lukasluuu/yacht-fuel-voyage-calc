
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Anchor, Fuel, Navigation } from "lucide-react";

interface CalculationResult {
  fuelNeeded: number;
  estimatedCost: number;
  travelTime: number;
}

const FuelCalculator = () => {
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
        <h1 className="text-2xl font-bold text-center mb-6 text-[#1E293B] flex items-center justify-center gap-2">
          <Anchor className="w-6 h-6 text-[#0EA5E9]" />
          Kalkulator Potrošnje Goriva za Jahte
        </h1>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tankCapacity">Kapacitet spremnika (L)</Label>
              <Input
                id="tankCapacity"
                name="tankCapacity"
                type="number"
                placeholder="npr. 1000"
                value={formData.tankCapacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelConsumption">Potrošnja (L/NM)</Label>
              <Input
                id="fuelConsumption"
                name="fuelConsumption"
                type="number"
                placeholder="npr. 20"
                value={formData.fuelConsumption}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDestination">Početna destinacija</Label>
              <Input
                id="startDestination"
                name="startDestination"
                placeholder="npr. Split"
                value={formData.startDestination}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDestination">Završna destinacija</Label>
              <Input
                id="endDestination"
                name="endDestination"
                placeholder="npr. Dubrovnik"
                value={formData.endDestination}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="distance">Udaljenost (NM)</Label>
              <Input
                id="distance"
                name="distance"
                type="number"
                placeholder="npr. 95"
                value={formData.distance}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speed">Brzina (čvorovi)</Label>
              <Input
                id="speed"
                name="speed"
                type="number"
                placeholder="npr. 20"
                value={formData.speed}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fuelPrice">Cijena goriva (€/L)</Label>
              <Input
                id="fuelPrice"
                name="fuelPrice"
                type="number"
                placeholder="npr. 1.5"
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
            Izračunaj
          </Button>

          {result && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-[#F8FAFC]">
                <div className="flex flex-col items-center">
                  <Fuel className="w-8 h-8 text-[#0EA5E9] mb-2" />
                  <p className="text-sm text-[#64748B]">Potrebno goriva</p>
                  <p className="text-xl font-bold text-[#1E293B]">
                    {result.fuelNeeded.toFixed(2)} L
                  </p>
                </div>
              </Card>
              <Card className="p-4 bg-[#F8FAFC]">
                <div className="flex flex-col items-center">
                  <Navigation className="w-8 h-8 text-[#0EA5E9] mb-2" />
                  <p className="text-sm text-[#64748B]">Vrijeme plovidbe</p>
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
                  <p className="text-sm text-[#64748B]">Procjena troška</p>
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
