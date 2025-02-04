export const { format: formatNumber } = Intl.NumberFormat("en-GB", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export const formatDate = (timestamp: string | Date) => {
  return timestamp ? new Date(timestamp).toLocaleDateString() : "N/A";
};
