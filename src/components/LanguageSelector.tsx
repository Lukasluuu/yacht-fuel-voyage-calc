
import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Language, useLanguage } from "@/context/LanguageContext";
import { Languages } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-center items-center w-full my-4">
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className="w-[120px] bg-white/90 border-sky-200">
          <Languages className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hr">Hrvatski</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="de">Deutsch</SelectItem>
          <SelectItem value="it">Italiano</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
