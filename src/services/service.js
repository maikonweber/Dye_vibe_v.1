

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

  export async function getMainPage(filter, orderB, orderA, page) {
    console.log(filter, orderB, orderA, page)
    const url = process.env.NEXT_PUBLIC_API_URL + `/api/productsFilter`
    console.log(url)
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' },
                  
        body: JSON.stringify({
            filter,
            orderB,
            orderA,
            page
        })
    })
    return await response.json();
    }

  export async function getDashboardUser(id) {
    const url = process.env.NEXT_PUBLIC_API_URL + `/dye/api/v3/getDashboardUser`
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': id,
        'acceptcookies': 'true'    
    },
    })
    return await response.json();

  }



module.exports = {
    paymentCheckout,
    paymentCheckoutAddress,
    paymentCheckoutSaveCart,
    getMainPage,
    getDashboardUser
}


