const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData.entries());
  
    let currentProduct: any; // Declare the variable 'currentProduct'
  
    const res = currentProduct
      ? await fetch('/api/products', {
          method: 'PUT',
          body: JSON.stringify({ ...currentProduct, ...productData }),
        })
      : await fetch('/api/products', {
          method: 'POST',
          body: JSON.stringify(productData),
        });
  
    const result = await res.json();
    if (result) {
      window.location.reload();
    }
  };
  