
export const toPisto = (pisto)=>{
  return `L. ${pisto.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
