export const formatToRp = (value) => {
  return `Rp. ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

export const toCapitalizeCase = (value) => {
  const words = value.toLowerCase().split(" ");

  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}