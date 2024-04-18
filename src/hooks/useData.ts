import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Billionair } from "./useBillionair";



const calculateAge = (birthDateMs: number): number => {
  const birthDateSeconds = birthDateMs / 1000;
  const birthYear = new Date(birthDateSeconds * 1000).getUTCFullYear();
  const currentYear = new Date().getUTCFullYear();
  return currentYear - birthYear;
};

const useData = (selectedCategory: string | undefined) => useQuery({
  queryKey: [selectedCategory || 'all'],
  queryFn: () => {
    if (selectedCategory) {
      return apiClient.get<Billionair[]>(`/forbes400/${selectedCategory}`)
        .then(res => {
          res.data.forEach((Billionair) => {
            Billionair.finalWorth /= 1000;
            Billionair.birthDate = calculateAge(Billionair.birthDate);
          });
          return res.data;
        });
    } else {
      return apiClient.get<Billionair[]>(`/forbes400`)
        .then(res => {
          res.data.forEach((Billionair) => {
            Billionair.finalWorth /= 1000;
            Billionair.birthDate = calculateAge(Billionair.birthDate);
          });
          return res.data;
        });
    }
  },
  staleTime: 24 * 60 * 60 * 1000, //24h
  keepPreviousData:true,
});



export default useData;