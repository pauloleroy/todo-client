// utils/date.js
export function getMesAtual() {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  return `${ano}-${mes}-01`; // primeiro dia do mês local
}

// utils/date.js
export function formatMesRef(value) {
  if (!value) return "";
  const d = new Date(value);
  if (isNaN(d)) return value;
  const ano = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  return `${ano}-${mes}`; // YYYY-MM
}


export function formatVencimento(value) {
  if (!value) return "";
  return value.slice(0, 10); // pega apenas YYYY-MM-DD
}