import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Billionair {
    rank: number;
    uri: string;
    personName: string;
    finalWorth: number;
    birthDate: number;
    gender: string;
    countryOfCitizenship: string;
    source: string;
    person: {
      squareImage: string;
    };
    bios: [
    ]
    abouts: [
      
    ]
  }


  const calculateAge = (birthDateMs: number): number => {
    const birthDateSeconds = birthDateMs / 1000;
    const birthYear = new Date(birthDateSeconds * 1000).getUTCFullYear();
    const currentYear = new Date().getUTCFullYear();
    return currentYear - birthYear;
  };

const useBillionair = (endpoint: string) => {
    const [billionaires, setBillionaires] = useState<Billionair[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Billionair[]>(endpoint , {signal: controller.signal})
      .then((res) => {
        res.data.forEach((country) => {
          country.finalWorth /= 1000;
          country.birthDate = calculateAge(country.birthDate);
        });
        {
          setBillionaires(res.data);
          setLoading(false)
        };
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
    });
      return () => controller.abort();
  }, []);
  return { billionaires, error,  isLoading }
}

export default useBillionair;