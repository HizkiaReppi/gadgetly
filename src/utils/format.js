export const formatToRp = (value) => {
  return `Rp. ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

export const toCapitalizeCase = (value) => {
  const words = value.toLowerCase().split(" ");

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const diffForHuman = (value) => {
  const date = new Date(value);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) {
    return `${seconds} detik yang lalu`;
  }
  if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} menit yang lalu`;
  }
  if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} jam yang lalu`;
  }
  return `${Math.floor(seconds / 86400)} hari yang lalu`;
};
