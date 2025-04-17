
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

const languageShortNames = {
  hr: "HR",
  en: "EN", 
  de: "DE", 
  it: "IT"
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-center items-center w-full my-4">
      <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
        <SelectTrigger className="w-[80px] bg-white/90 border-sky-200">
          <SelectValue placeholder="Language">
            {languageShortNames[language]}
          </SelectValue>
          <Languages className="h-6 w-6 ml-2" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hr">{languageShortNames.hr}</SelectItem>
          <SelectItem value="en">{languageShortNames.en}</SelectItem>
          <SelectItem value="de">{languageShortNames.de}</SelectItem>
          <SelectItem value="it">{languageShortNames.it}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

