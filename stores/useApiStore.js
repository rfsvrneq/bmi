import { defineStore } from "pinia";

export const useApiStore = defineStore("api", () => {
  
  // const apiData = ref({});

  const apiData_1 = ref({});
  const apiData_2 = ref({});
  const apiData_3 = ref({});

  // const setApiData = (data) => {
  //   apiData.value = data;
  //   console.log(data);
  // }
  // return { apiData, setApiData };

  // 特企
  const setApiData_1 = (data) => {
    apiData_1.value = data.JData.FeatureList;
    // console.log(data.JData.FeatureList);
  }

  const setApiData_2 = (data) => {
    apiData_2.value = data.JData;
    // console.log(data.JData);
  }

  const setApiData_3 = (data) => {
    apiData_3.value = data.JData;
    // console.log(data.JData);
  }

  return { 
    apiData_1, 
    apiData_2, 
    apiData_3, 
    setApiData_1, 
    setApiData_2, 
    setApiData_3 
  };

});