const formatCurrency = (price = 0, code = 'TRY') =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: code,
  }).format(price);

export {formatCurrency};
