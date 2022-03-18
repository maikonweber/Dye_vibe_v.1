export async function paymentCheckout(username, lastname, cpf, phone, email) {
    const response = await fetch(`/dye/v3/api/payment_checkout_user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        lastname,
        cpf,
        phone,
        email
      })
    })
    return await response.json();
  }

  export async function paymentCheckoutAddress(user_id,street, number, complement, neighborhood, city, state, cep, country) {
    const response = await fetch(`/dye/v3/api/payment_checkout_address`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id,
        street,
        number,
        complement,
        neighborhood,
        city,
        state,
        cep,
        country
      })
    })
    return await response.json();
  }

  export async function paymentCheckoutSaveCart(data, user_id, add_id) {
    const response = await fetch(`/dye/v3/api/payment_checkout_save_cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data,
        user_id,
        add_id
      })
    })
    return await response.json();
    
  }
