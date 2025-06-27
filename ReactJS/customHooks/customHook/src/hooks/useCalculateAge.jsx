const useCalculateAge = (name, dob) => {
  let isUseCitizen = false;
  const setCitizen = (USCitizen) => {
    isUseCitizen = USCitizen;
  };
  const ageCalculator = () => {
    const age = 2025 - dob;
    return `${name} you are ${age} years old. you are ${
      isUseCitizen ? "US Citizen" : "Not a US Citizen"
    }`;
  };
  function getDetails() {
    const details = {
      name: name,
      age: 2025 - dob,
      address: "1455 NE",
    };
    const isMarried = true;
    const kids = ["Abdullah", "Hosna", "Abdul Musawer"];
    return { details, isMarried, kids };
  }

  return [ageCalculator, getDetails, setCitizen];
};

export default useCalculateAge;
